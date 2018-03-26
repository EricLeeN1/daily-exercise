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
        extensions: ['.ts', '.js', '.tsx', '.vue', 'json']
    },
    module: {
        rules: [{
                test: /\.scss/, // 增加对 SCSS 文件的支持
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }, // 加载 .ts 文件
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    // 让 tsc 把 vue 文件当成一个 TypeScript 模块去处理，以解决 moudle not found 的问题，tsc 本身不会处理 .vue 结尾的文件
                    appendTsSuffixTo: [/\.vue$/],
                }
            }, {
                test: /\.vue$/,
                use: ['vue-loader']
            }, {
                test: /\.js$/,
                use: ['babel-loader'],
                // 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
                exclude: path.resolve(__dirname, 'node_modules'),
                //以下是需要加载第三方js及对应的Source Map文件的配置
                // 只加载你关心的目录下的 Source Map，以提升构建速度
                include: [path.resolve(root, 'node_modules/some-components/')],
                use: ['source-map-loader'],
                // 要把 source-map-loader 的执行顺序放到最前面，如果在 source-map-loader 之前有 Loader 转换了该 JavaScript 文件，会导致 Source Map 映射错误
                enforce: 'pre'
            }, {
                // 同时匹配ts,tsx后缀的TypeScript源码文件
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }, {
                // 使用 PostCSS 处理 CSS 文件
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.png$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        // 30KB 以下的文件采用 url-loader
                        limit: 1024 * 30,
                        // 否则采用 file-loader，默认值就是 file-loader 
                        fallback: 'file-loader',
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: ['raw-loader', 'svg-inline-loader']
            }
        ]
    },
    devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};