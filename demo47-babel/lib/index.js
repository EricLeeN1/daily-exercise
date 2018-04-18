'use strict';

var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core').transform(es6Code, {
    presets: ['es2015']
}).code;
// '"use strict";\n\nvar x = function x(n) {\n  return n + 1;\n};'
//# sourceMappingURL=index.js.map