var typeOf = require('type-of-is').string;

module.exports = deepCompare = function (pattern, obj) {
    if(!~['Object', 'Array'].indexOf(typeOf(pattern))||!~['Object', 'Array'].indexOf(typeOf(pattern)))throw Error('Pattern and object must be array or object');

    for (var i in pattern) {
        if (!obj.hasOwnProperty(i) || typeOf(pattern[i]) !== typeOf(obj[i]))return false;
        if (~['Object', 'Array'].indexOf(typeOf(pattern[i]))) {
            if (deepCompare(pattern[i], obj[i])) {
                continue;
            } else {
                return false;
            }
        }
        if (pattern[i] !== obj[i])return false;
    }
    return true;
}