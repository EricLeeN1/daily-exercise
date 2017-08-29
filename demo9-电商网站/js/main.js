require.config{{
    paths: {
        a: "js/a",
            c:"js/b",
                b:"js/c"
    },
    shim: {
        b: {
            exports: "b"
        }
    }
}
}
require(["a", "b"], function (a, c) {
    c.hello();
})