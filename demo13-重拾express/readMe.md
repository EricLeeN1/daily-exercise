#Express 4.x API学习以及相关案例

##一.expres()
    
###1. 创建一个Express应用。

    Express()是一个由express模块导出的入口最顶层函数

###2. code

    `var express = require('express');
    var app = express();`

###3. 内置方法 -> `express.static(root,[options])`

    express.static 是 Express 内置的唯一一个中间件。是基于 serve-static 开发的，负责托管 Express 应用内的静态资源。
    root 参数指的是静态资源文件所在的根目录
    options对象可选，属性参看下表
        属性  描述  类型  默认值
        dotfiles    .此属性用来服务.文件，值'allow-允许','deny-拒绝','ignore-忽略'    String   'ignore'
        etag    启用或禁用etag生成    Boolean    true
        extensions    设置文件可扩展后缀名    Boolean    false
        index    发送目录索引文件。设置false以禁用目录索引    Mixed   'index.html'
        lastModified    将最后修改的头设置为操作系统上文件的最后修改日期。可设置的值为true或false。    Boolean    true
        maxAge   为cache - control header的max - age属性设置为毫秒或ms格式的字符串    Number    0
        redirect    当路径名是一个目录时，重定向到后面追加“/”的路径    Boolean    true
        setHeaders    一个函数，为文件设置Http headers    Function
        options默认设置 ->
            {
            dotfiles: "ignore",
            etag: true,
            extensions: false,
            index: "index.html",
            lastModified: true,
            maxAge: 0,
            redirect: true,
            setHeader: function(){}
            }

###4. 内置方法的使用
####1）. // 利用express托管静态文件

    app.use(express.static(path.join(__dirname, 'public')));

####2）. //相对路径

    app.use(express.static('./public'));

##二.Application（应用）
    
###1. app对象通常表示Express应用程序。通过调用express模块导出的顶级express()函数来创建它:

    `var express = require('express');
    var app = express();
    app.get('/',function (req,res) {
        res.send('Hello Eric');
    });
    app.listen(3000);`

###2. app对象的部分方法

        1. 路由器HTTP请求，例子app.method
        2. 配置中间件，例子app.route
        3. 渲染HTML视图，例子app.render
        4. 注册一个模版引擎，例子app.engine

###3. app对象的一些会影响到它表现的属性/设置 -> Properties
####1）. app.locals(区域变量)

    app.locals对象是一个JavaScript对象，它的属性是应用程序中的局部变量 
    app.locals在整个应用周期都不变
    res.locals仅在请求的周期内有效
    您可以在应用程序中渲染模板时访问本地变量。这对于向模板提供辅助函数以及app级数据非常有用。但是，请注意，您不能在中间件中访问本地变量。

####2）. app.mountpath(嵌入路径、增加路径)

    1. 这个属性是安装子应用程序的路径模式。
    2. 一个子应用程序（sub app）是express的一个实例，它可以用于处理请求到路由
    3.它类似于req对象的baseUrl属性，但是req。baseUrl返回匹配的URL路径，而不是匹配的模式(s)。 
    4. 例子：-> mountpath.js  mountpath1.js
    5. 感觉：-> 通过这种方式可以用来处理’/main/sub‘这种sub路由的细致操作，不需要每次都请求`/main/sub`这个路径。通过中间件main.use(url,sub);即可实现sub.get('/',function(){})，这种操作，简化了路由处理。

###4. app的事件 -> Events
####1）.app.on('mount', callback(parent))

    1. 这个嵌入事件在子应用程序上被触发，当它被安装在父应用程序上时，父应用程序被传递给回调函数。
    2. 例子：appEvents.js

 ###5.app的方法 -> Methods
####1）.app.all(path, callback [, callback ...])

    该方法类似于标准的app . method()方法，除了app . method()方法与所有的HTTP动词相匹配不一样。

####2）.app.delete(path, callback [, callback ...])

    1. 通过指定的回调函数将HTTP DELETE请求路由  指定的路径