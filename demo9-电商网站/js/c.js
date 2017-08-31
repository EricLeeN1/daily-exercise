define(function (require) {
    var c = {
        helloc: function () {
            console.log('hello,I am c');
            var a = require('a');
            a.hello();
        }
    }
    return c;
});