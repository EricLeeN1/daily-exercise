const path = require('path');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

// 1. 同步导出一个Function
module.exports = function (env = {}, argv) {
    const plugins = [];

    const isProduction = env['production'];

    // 在生成环境才压缩
    if (isProduction) {
        plugins.push(
            // 压缩输出的 JS 代码
            new UglifyJsPlugin({
                // 最紧凑的输出
                beautify: false,
                // 删除所有的注释
                comments: false,
                compress: {
                    // 在UglifyJs删除没有用到的代码时不输出警告
                    warnings: false,
                    // 删除所有的 `console` 语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            })
        )
    }

    return {
        // JS 执行入口文件
        entry: './main.js',
        output: {
            // 把所有依赖的模块合并输出到一个 bundle.js 文件
            filename: 'bundle.js',
            // 输出文件都放到 dist 目录下
            path: path.resolve(__dirname, './dist'),
        },
        plugins: plugins,
        // 在生成环境不输出 Source Map
        devtool: isProduction ? undefined : 'source-map',
    };
}

// 2.导出一个返回 Promise 的函数
module.exports = function (env = {}, argv) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const plugins = [];

            const isProduction = env['production'];

            // 在生成环境才压缩
            if (isProduction) {
                plugins.push(
                    // 压缩输出的 JS 代码
                    new UglifyJsPlugin({
                        // 最紧凑的输出
                        beautify: false,
                        // 删除所有的注释
                        comments: false,
                        compress: {
                            // 在UglifyJs删除没有用到的代码时不输出警告
                            warnings: false,
                            // 删除所有的 `console` 语句，可以兼容ie浏览器
                            drop_console: true,
                            // 内嵌定义了但是只用到一次的变量
                            collapse_vars: true,
                            // 提取出出现多次但是没有定义成变量去引用的静态值
                            reduce_vars: true,
                        }
                    })
                )
            }

            return {
                // JS 执行入口文件
                entry: './main.js',
                output: {
                    // 把所有依赖的模块合并输出到一个 bundle.js 文件
                    filename: 'bundle.js',
                    // 输出文件都放到 dist 目录下
                    path: path.resolve(__dirname, './dist'),
                },
                plugins: plugins,
                // 在生成环境不输出 Source Map
                devtool: isProduction ? undefined : 'source-map',
            };
        }, 5000);
    })
}

// 3.导出多分配置
module.exports = [
    // 采用Object描述的一份配置
    {

    },
    // 采用函数描述的一份配置
    function (env = {}, argv) {
        const plugins = [];

        const isProduction = env['production'];

        // 在生成环境才压缩
        if (isProduction) {
            plugins.push(
                // 压缩输出的 JS 代码
                new UglifyJsPlugin({
                    // 最紧凑的输出
                    beautify: false,
                    // 删除所有的注释
                    comments: false,
                    compress: {
                        // 在UglifyJs删除没有用到的代码时不输出警告
                        warnings: false,
                        // 删除所有的 `console` 语句，可以兼容ie浏览器
                        drop_console: true,
                        // 内嵌定义了但是只用到一次的变量
                        collapse_vars: true,
                        // 提取出出现多次但是没有定义成变量去引用的静态值
                        reduce_vars: true,
                    }
                })
            )
        }

        return {
            // JS 执行入口文件
            entry: './main.js',
            output: {
                // 把所有依赖的模块合并输出到一个 bundle.js 文件
                filename: 'bundle.js',
                // 输出文件都放到 dist 目录下
                path: path.resolve(__dirname, './dist'),
            },
            plugins: plugins,
            // 在生成环境不输出 Source Map
            devtool: isProduction ? undefined : 'source-map',
        };
    },
    // 采用异步函数描述的一份配置
    function (env = {}, argv) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const plugins = [];

                const isProduction = env['production'];

                // 在生成环境才压缩
                if (isProduction) {
                    plugins.push(
                        // 压缩输出的 JS 代码
                        new UglifyJsPlugin({
                            // 最紧凑的输出
                            beautify: false,
                            // 删除所有的注释
                            comments: false,
                            compress: {
                                // 在UglifyJs删除没有用到的代码时不输出警告
                                warnings: false,
                                // 删除所有的 `console` 语句，可以兼容ie浏览器
                                drop_console: true,
                                // 内嵌定义了但是只用到一次的变量
                                collapse_vars: true,
                                // 提取出出现多次但是没有定义成变量去引用的静态值
                                reduce_vars: true,
                            }
                        })
                    )
                }

                return {
                    // JS 执行入口文件
                    entry: './main.js',
                    output: {
                        // 把所有依赖的模块合并输出到一个 bundle.js 文件
                        filename: 'bundle.js',
                        // 输出文件都放到 dist 目录下
                        path: path.resolve(__dirname, './dist'),
                    },
                    plugins: plugins,
                    // 在生成环境不输出 Source Map
                    devtool: isProduction ? undefined : 'source-map',
                };
            }, 5000);
        })
    }
]