const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // JavaScript执行入口文件
    entry: "./main.js",
    output: {
        //把所有依赖的模块合并输出到一个bundle，js文件
        filename: "bundle.js",
        // 删除文件都放到dist目录下
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [{
            // 用正则去匹配要用改loader转换的CSS文件
            test: /\.css$/,
            // use: ['style-loader', 'css-loader?minimize'],//写法1
            // use: [
            //     'style-loader',
            //     {
            //         loader: "css-loader",
            //         options: {
            //             minimize: true
            //         }
            //     }
            // ] //写法2
            use: ExtractTextPlugin.extract({
                // 转换 .css 文件需要使用的 Loader
                // use: ['style-loader', 'css-loader?minimize'],
                use: ['css-loader']
            }),
            // 有ExtractTextPlugin之后的写法3
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`
        })
    ]
}