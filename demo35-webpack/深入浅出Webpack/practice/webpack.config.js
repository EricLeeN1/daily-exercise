const path = require('path');

module.exports = {
    // JS 执行入口文件
    entry: './main.js',
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        // 先尝试 ts，tsx 后缀的 TypeScript 源码文件
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.scss/, // 增加对 SCSS 文件的支持
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
        }, {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }, {
            // 使用 PostCSS 处理 CSS 文件
            test: /\.css/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        }, ]
    },
    devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};