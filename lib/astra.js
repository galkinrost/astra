var astCrush = require('./ast_crush');
var deepCompare = require('./deep_compare');
var typeOf = require('type-of-is').string;

module.exports = function (ast) {
    var Ast = function (ast) {
        this.ast = ast;
        this.astCrushed = astCrush(ast);
        this.handlers = [];
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

    Ast.prototype.run = function () {
        for (var i in this.astCrushed) {
            for (var ii in this.handlers) {
                if (deepCompare(this.handlers[ii].pattern, this.astCrushed[i])) {
                    this.handlers[ii].handler(this.astCrushed[i]);
                }
            }
        }

        return  this.ast;
    }

    return new Ast(ast);

}