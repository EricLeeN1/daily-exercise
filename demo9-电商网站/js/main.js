require.config({
    paths: {
        a: "a",
        c: "b",
        b: "c"
    }
    // shim: {
    //     b: {
    //         exports: "b"
    //     }
    // }
});
require(["a"], function (a) {
    a.hello();
})