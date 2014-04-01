var typeOf = require('type-of-is').string;
var _ = require('underscore');

module.exports = astCrush = function (ast) {
    if (!~['Object', 'Array'].indexOf(typeOf(ast)))throw Error('Ast must be an object');

    var asts = [];

    if (typeOf(ast) === 'Object') {
        asts.push(ast);
    }

    for (var i in ast) {
        if (~['Object', 'Array'].indexOf(typeOf(ast[i]))) {
            asts = astCrush(ast[i]).concat(asts);
        }
        continue;
    }

    return asts;
}