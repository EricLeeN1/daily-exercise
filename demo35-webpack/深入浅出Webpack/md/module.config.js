export default {
    rules: [{
        test: /\.js$/,
        // use: ['babel-loader?cacheDirectory'],// 写法1
        // 用 babel-loader 转换 JavaScript 文件
        // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        use: [{ //写法2
            loader: 'babel-loader',
            options: {
                cacheDirectory: true
            },
            enforce: 'post'
            // enforce:'post' 的含义是把该 Loader 的执行顺序放到最后
            // enforce 的值还可以是 pre，代表把 Loader 的执行顺序放到最前面

        }],
        // 只命中src目录里的js文件，加快 Webpack 搜索速度
        include: path.resolve(__dirname, 'src'),
        parser: {
            amd: false, // 禁用 AMD
            commonjs: false, // 禁用 CommonJS
            system: false, // 禁用 SystemJS
            harmony: false, // 禁用 ES6 import/export
            requireInclude: false, // 禁用 require.include
            requireEnsure: false, // 禁用 require.ensure
            requireContext: false, // 禁用 require.context
            browserify: false, // 禁用 browserify
            requireJs: false, // 禁用 requirejs
        }
    }, {
        test: /\.scss$/,
        // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // 排除 node_modules 目录下的文件
        exclude: path.resolve(__dirname, 'node_modules')
    }, {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        use: ['file-loader'],
    }, {
        // 数组里的每项之间是或的关系，即文件路径符合数组中的任何一个条件就会被命中。
        test: [
            /\.jsx?$/,
            /\.tsx?$/
        ],
        include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'tests'),
        ],
        exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'bower_modules'),
        ]
    }],
    // 1. 使用正则表达式
    noParse: /jquery|chartjs/,

    // 2. 使用函数，从 Webpack 3.0.0 开始支持
    // noParse: (content) => {
    //     // content 代表一个模块的文件路径
    //     // 返回 true or false
    //     return /jquery|chartjs/.test(content);
    // }
}