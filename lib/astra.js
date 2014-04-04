var astCrush = require('./ast_crush');
var deepCompare = require('./deep_compare');
var typeOf = require('type-of-is').string;
var async = require('async');

module.exports = function (ast, isAsync) {
    var Ast = function (ast) {
        this.ast = ast;
        this.astCrushed = astCrush(ast);
        this.handlers = [];
        this.isAsync = 'undefined' == typeof isAsync ? false : isAsync;
    }

    Ast.prototype.when = function (pattern, handler) {
        if (typeOf(pattern) !== 'Object')throw Error('Pattern must be an Object');
        if (typeOf(handler) !== 'Function')throw Error('Handler must be a Function');

        this.handlers.push({
            pattern: pattern,
            handler: handler
        });

        return this;
    }

    Ast.prototype.run = function (done) {
        if (this.isAsync) {
            var self = this;
            var handlers = [];
            if ('function' !== typeof done)throw Error('Astra was started in async mode, which require callback for run method');
            for (var i in this.astCrushed) {
                for (var ii in this.handlers) {
                    if (deepCompare(this.handlers[ii].pattern, this.astCrushed[i])) {
                        (function (ii, i) {
                            handlers.push(function (done) {
                                self.handlers[ii].handler(self.astCrushed[i], done);
                            });
                        })(ii, i);
                    }
                }
            }
            if (handlers.length > 0) {
                async.parallel(handlers, function (err) {
                    done(err, self.ast);
                });
            }
        } else {
            for (var i in this.astCrushed) {
                for (var ii in this.handlers) {
                    if (deepCompare(this.handlers[ii].pattern, this.astCrushed[i])) {
                        this.handlers[ii].handler(this.astCrushed[i]);
                    }
                }
            }

            return  this.ast;
        }
    }

    return new Ast(ast);

}