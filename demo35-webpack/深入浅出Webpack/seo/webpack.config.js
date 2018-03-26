const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
// 构造出共享进程池，进程池中包含5个子进程
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

module.exports = {
    module: {
        rules: [{
            // 如果项目源码中只有 js 文件就不要写成 /\.jsx?$/，提升正则表达式性能
            test: /\.js$/,
            // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
            use: ['happypack/loader?id=babel'],
            // babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
            use: ['babel-loader?cacheDirectory'],
            // 只对项目根目录下的 src 目录中的文件采用 babel-loader
            include: path.resolve(__dirname, 'src'),
        }, {
            // 把对 .css 文件的处理转交给 id 为 css 的 HappyPack 实例
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['happypack/loader?id=css'],
            }),
        }]
    },
    resolve: {
        // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
        // 其中 __dirname 表示当前工作目录，也就是项目根目录
        modules: [path.resolve(__dirname, 'node_modules')],
        // 只采用 main 字段作为入口文件描述字段，以减少搜索步骤
        mainFields: ['main'],
        // 使用 alias 把导入 react 的语句换成直接使用单独完整的 react.min.js 文件，
        // 减少耗时的递归解析操作
        alias: {
            'react': path.resolve(__dirname, './node_modules/react/dist/react.min.js'),
        },
        // 尽可能的减少后缀尝试的可能性
        extensions: ['js'],
        // 独完整的 `react.min.js` 文件就没有采用模块化，忽略对 `react.min.js` 文件的递归解析处理
        noParse: [/react\.min\.js$/],
    },
    plugins: [
        new HappyPack({
            // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
            id: 'babel',
            // 如何处理 .js 文件，用法和 Loader 配置中一样
            loaders: ['babel-loader?cacheDirectory'],
            // ... 其它配置项
        }),
        new HappyPack({
            id: 'css',
            // 如何处理 .css 文件，用法和 Loader 配置中一样
            loaders: ['css-loader'],
        }),
        new ExtractTextPlugin({
            filename: `[name].css`,
        }),
    ]
}