require.config({
    paths: {
        a: "a",
        c: "c",
        b: "b"
    },
    shim: {
        b: {
            exports: "b"
        }
    }
});
require(["a", "b", "c"], function (a, b, c) {
    var hello = a.hello();
    document.querySelector('#h1').innerHTML = hello;
    hellob();
    hellob1();
    c.helloc();
});