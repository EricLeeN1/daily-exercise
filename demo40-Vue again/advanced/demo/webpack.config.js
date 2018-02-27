var path = require('path');
// 导入插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:"css-loader"
            })
            // use: [
            //     'style-loader',
            //     'css-loader'
            // ]
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
module.exports = config;