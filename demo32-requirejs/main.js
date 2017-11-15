console.log("main");

// 1、关联模块
// require(['a.js','b.js']);

// 2、config
require.config({
    paths: {
        // 给模块设置一个别名,记得删掉后缀
        // "aaa":"a",
        "jquery": ["https://cdn.bootcss.com/jquery/3.2.1/jquery.min", "jquery.min"],
        "bbb": "b"
    }
});

require(["jquery", "bbb"], function ($, b) {
    console.log($);
    console.log(b)
    $("html").append($("<h2>require我会了</h2>"));
});

