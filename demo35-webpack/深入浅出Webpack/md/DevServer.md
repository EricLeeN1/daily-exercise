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