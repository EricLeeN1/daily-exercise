const config = {
    entry: {
        app: "./src/main.js",
        vendors: "./src/vendors.js"
    },
    output: {
        filename: "[name].js",
        path: _dirname + '/dist'
    },
    mode: "production",
    rules: [{
        test: /\.css$/,
        use: "css-loader"
    }, {
        test: /\.ts$/,
        use: "ts-loader"
    }]
}

module.exports = config;