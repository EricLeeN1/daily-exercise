# DevServer #

## 1.hot ##

    devServer.hot。配置是否启用模块热替换功能，默认的行为是在发现源代码呗更新后会通过自动刷新整个页面来做到实时预览，开启模块热替换功能后将在不刷新整个页面的情况下通过用新模块替换老模块来做到实时预览。

## 2.inline ##

    1. DevServer 的实时预览功能依赖一个注入到页面里的代理客户端去接受来自 DevServer 的命令和负责刷新网页的工作。 devServer.inline 用于配置是否自动注入这个代理客户端到将运行在页面里的 Chunk 里去，默认是会自动注入。

## 3.historyApiFallback ##

    1. historyApiFallback: true
    2. `historyApiFallback: {
    // 使用正则匹配命中路由
        rewrites: [
        // /user 开头的都返回 user.html
        { from: /^\/user/, to: '/user.html' },
        { from: /^\/game/, to: '/game.html' },
        // 其它的都返回 index.html
        { from: /./, to: '/index.html' },
        ]
    }`

## 4.contentBase ##

    1.  配置 DevServer HTTP 服务器的文件根目录。 默认情况下为当前执行目录，通常是项目根目录，所有一般情况下你不必设置它，除非你有额外的文件需要被 DevServer 服务。
    2.  `devServer:{
            contentBase: path.join(__dirname, 'public')
        }`
    3.  contentBase 只能用来配置暴露本地文件的规则，你可以通过 contentBase:false 来关闭暴露本地文件。

## 5. headers ##

    1. 可以在 HTTP 响应中注入一些 HTTP 响应头
    2. `devServer:{
            headers: {
            'X-foo':'bar'
            }
        }`

## 6. host ##

    1. devServer.host 配置项用于配置 DevServer 服务监听的地址。 例如你想要局域网中的其它设备访问你本地的服务，可以在启动 DevServer 时带上 --host 0.0.0.0。 host 的默认值是 127.0.0.1 即只有本地可以访问 DevServer 的 HTTP 服务。

## 7. port ##

    devServer.port 配置项用于配置 DevServer 服务监听的端口，默认使用 8080 端口。 如果 8080 端口已经被其它程序占有就使用 8081，如果 8081 还是被占用就使用 8082，以此类推。

## 8. allowedHosts ##

    1. devServer.allowedHosts 配置一个白名单列表，只有 HTTP 请求的 HOST 在列表里才正常返回。

## 9. disableHostCheck ##

    1. devServer.disableHostCheck 配置项用于配置是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查。 DevServer 默认只接受来自本地的请求，关闭后可以接受来自任何 HOST 的请求。 它通常用于搭配 --host 0.0.0.0 使用，因为你想要其它设备访问你本地的服务，但访问时是直接通过 IP 地址访问而不是 HOST 访问，所以需要关闭 HOST 检查。

## 10. https ##

    DevServer 默认使用 HTTP 协议服务，它也能通过 HTTPS 协议服务。 有些情况下你必须使用 HTTPS，例如 HTTP2 和 Service Worker 就必须运行在 HTTPS 之上。 要切换成 HTTPS 服务，最简单的方式是：

## 11. clientLogLevel ##

    devServer.clientLogLevel 配置在客户端的日志等级，这会影响到你在浏览器开发者工具控制台里看到的日志内容。 clientLogLevel 是枚举类型，可取如下之一的值 none | error | warning | info。 默认为 info 级别，即输出所有类型的日志，设置成 none 可以不输出任何日志。

## 12. compress ##

    devServer.compress 配置是否启用 gzip 压缩。boolean 为类型，默认为 false。

## 13. open ##

    devServer.open 用于在 DevServer 启动且第一次构建完时自动用你系统上默认的浏览器去打开要开发的网页。 同时还提供 devServer.openPage 配置项用于打开指定 URL 的网页。