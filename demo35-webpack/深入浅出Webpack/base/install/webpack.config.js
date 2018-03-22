const path = require('path');

module.exports = {
    // JavaScript执行入口文件
    entry: "./main.js",
    output: {
        //把所有依赖的模块合并输出到一个bundle，js文件
        filename: "bundle.js",
        // 删除文件都放到dist目录下
        path: path.resolve(__dirname, "./dist")
    }
}