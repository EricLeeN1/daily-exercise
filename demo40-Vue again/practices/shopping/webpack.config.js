var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: ['css-loader', 'less-loader'],
                            fallback: 'vue-style-loader'
                        }),
                        less: ExtractTextPlugin.extract({
                            use: ['css-loader', 'less-loader'],
                            fallback: "vue-style-loader"
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: '/\.less$/',
                loader: ExtractTextPlugin.extract({
                    use: ['less-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    vue: {
        loaders: {
            js: "babel",
            css: ExtractTextPlugin.extract("css"),
            sass: ExtractTextPlugin.extract("css!scss")
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
};

module.exports = config;