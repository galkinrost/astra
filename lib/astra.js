var astCrush = require('./ast_crush');
var deepCompare = require('./deep_compare');
var deepScan = require('./deep_scan');
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
        if (!~['Array', 'Object'].indexOf(typeOf(pattern)))throw Error('Pattern must be an Object or Array');
        if (typeOf(handler) !== 'Function')throw Error('Handler must be a Function');

        this.handlers.push({
            pattern: pattern,
            handler: handler
        });

        return this;
    }

    Ast.prototype.run = function (done) {
        var self = this;
        if (this.isAsync) {
            var handlers = [];
            if ('function' !== typeof done)throw Error('Astra was started in async mode, which require callback for run method');
            for (var i in this.astCrushed) {
                for (var ii in this.handlers) {
                    if (typeOf(this.handlers[ii].pattern) === 'Array') {
                        for (var iii in this.handlers[ii].pattern) {
                            deepScan(this.handlers[ii].pattern[iii], this.astCrushed[i]).forEach(function (chunk) {
                                (function (ii, chunk) {
                                    handlers.push(function (done) {
                                        self.handlers[ii].handler(chunk, done);
                                    });
                                })(ii, chunk);
                            })
                        }
                    } else {
                        deepScan(this.handlers[ii].pattern, this.astCrushed[i]).forEach(function (chunk) {
                            (function (ii, chunk) {
                                handlers.push(function (done) {
                                    self.handlers[ii].handler(chunk, done);
                                });
                            })(ii, chunk);
                        });
                    }
                }
            }
            if (handlers.length > 0) {
                async.parallel(handlers, function (err) {
                    done(err, self.ast);
                });
            } else {
                done(null, self.ast);
            }
        } else {
            for (var i in this.astCrushed) {
                for (var ii in this.handlers) {
                    if (typeOf(this.handlers[ii].pattern) === 'Array') {
                        for (var iii in this.handlers[ii].pattern) {
                            deepScan(this.handlers[ii].pattern[iii], this.astCrushed[i]).forEach(function (chunk) {
                                self.handlers[ii].handler(chunk);
                            });

                        }
                    } else {
                        deepScan(this.handlers[ii].pattern, this.astCrushed[i]).forEach(function (chunk) {
                            self.handlers[ii].handler(chunk);
                        });
                    }
                }
            }

            return  this.ast;
        }
    }

    return new Ast(ast);

}