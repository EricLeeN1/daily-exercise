export default {
    hot: '',
    inline: '',
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    headers: {
        "x-foo": "bar"
    },
    host: "127.0.0.1",
    port: "8088",
    allowedHosts: [
        // 匹配单个域名
        'host.com',
        'sub.host.com',
        // host2.com 和所有的子域名 *.host2.com 都将匹配
        '.host2.com'
    ],
    disableHostCheck: "",
    https: {
        key: fs.readFileSync('path/to/server.key'),
        cert: fs.readFileSync('path/to/server.crt'),
        ca: fs.readFileSync('path/to/ca.pem')
    },
    clientLogLevel: "none | error | warning | info。 默认为 info 级别，即输出所有类型的日志，设置成 none 可以不输出任何日志。",
    compress: false,
    open:true
}