const config = {
    entry: {
        app: "./src/main.js",
        vendors: "./src/vendors.js"
    },
    output: {
        filename: "[name].js",
        path: _dirname + '/dist'
    }
}

module.exports = config;