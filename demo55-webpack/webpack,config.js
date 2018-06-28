const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过npm安装
const webpack = require('webpack');
const path = require('path');
const config = {
    entry: {
        app: "./src/main.js",
        vendors: "./src/vendors.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(_dirname, '/dist')
    },
    mode: "production",
    module: {
        rules: [{
                test: /\.css$/,
                use: "css-loader"
            }, {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = config;