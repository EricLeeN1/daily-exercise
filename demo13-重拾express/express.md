
#windows下安装express

##在你的windows上已经安装了node.js的基础上再安装express

###第一部分:安装express 

    1. 第一步:执行 npm install -g express-generator 
        tips:必须安装这个,不然创建express项目的时候会提示express命令没有找到
    2. 第二步:执行 npm install -g express
    3. 第三步:执行 express -V
        -h, --help          output usage information
        -V, --version       output the version number
        -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
        -H, --hogan         add hogan.js engine support
        -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
        -f, --force         force on non-empty directory
        tips:'V'是大写的,如果express安装成功会显示版本号,
        我用的是window10。貌似不一样， express --version

###第二部分:创建一个express项目 

    1. 第一步:执行 express youProjectName
        tips:youProjectName是你的项目的名称,按照自己的要求选择合适的项目名称--view=jade 选择view模版的类型 或者是ejs 感觉ejs更简单
    2. 第二步 :进入你的项目:cd youProjectName
    3. 第三步:在你的项目的目录下执行 npm install来安装所有依赖包
    4. 第四步:启动你的项目,执行 npm start
    
###第三部分:在浏览器中访问你的项目
    
    打开你的浏览器,在地址栏中输入:http://127.0.0.1:3000
    或者http://localhost:3000/
    然后你会看到:express的欢迎信息 

#######################################

##名词解释部分

###1. 路由
    
    1.路由（Routing）是由一个 URI（或者叫路径）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何响应客户端对某个网站节点的访问。
    2. 每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个/些函数将被执行。
    3. 路由的定义由如下结构组成：app.METHOD(PATH, HANDLER)。其中，app 是一个 express 实例；METHOD 是某个 HTTP 请求方式中的一个；PATH 是服务器端的路径；HANDLER 是当路由匹配到时需要执行的函数。
    4. 路由方法
        get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect。
        有些路由方法名不是合规的 JavaScript 变量名，此时使用括号记法，比如： app['m-search']('/', function ...
        app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。
    5. 路由路径
        它可以是字符串、字符串模式或者正则表达式。
        1. 字符串
            /about-> 匹配 /about 路径的请求
            /-> 匹配根路径的请求
            /random.text 匹配 /random.text 路径的请求
        2. 字符串模式
            /ab?cd -> 匹配 acd 和 abcd
            /ab+cd -> 匹配 abcd、abbcd、abbbcd等
            /ab*cd -> 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
            /ab(cd)?e -> 匹配 /abe 和 /abcde
        3. 正则表达式
            字符 ?、+、* 和 () 是正则表达式的子集，- 和 . 在基于字符串的路径中按照字面值解释。
            /a/ -> 匹配任何路径中含有 a 的路径:
            /.*fly$/ -> 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等,即以fly结尾的字符串
    6. 路由句柄
        可以为请求处理提供多个回调函数，其行为类似 中间件。唯一的区别是这些回调函数有可能调用 next('route') 方法而略过其他路由回调函数。可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。
        路由句柄有多种形式，可以是一个函数、一个函数数组，或者是两者混合，
            1. 一个函数 -> 
                `app.get('/example/a', function (req, res) {
                  res.send('Hello from A!');
                });`
            2. 使用多个回调函数处理路由（记得指定 next 对象 -> 
            `app.get('/example/b', function (req, res, next) {
                console.log('response will be sent by the next function ...');
                next();
                }, function (req, res) {
                res.send('Hello from B!');
                });`
            3. 使用回调函数数组处理路由
                `var cb0 = function (req, res, next) {
                    console.log('CB0');
                    next();
                    }
                var cb1 = function (req, res, next) {
                    console.log('CB1');
                    next();
                    }
                var cb2 = function (req, res) {
                    res.send('Hello from C!');
                    }
                app.get('/example/c', [cb0, cb1, cb2]);`
            4. 混合使用函数和函数数组处理路由：
                `var cb0 = function (req, res, next) {
                    console.log('CB0');
                    next();
                }
                var cb1 = function (req, res, next) {
                    console.log('CB1');
                    next();
                }
                app.get('/example/d', [cb0, cb1], function (req, res, next) {
                    console.log('response will be sent by the next function ...');
                    next();
                }, function (req, res) {
                    res.send('Hello from D!');
                });`
    7. 响应方法
        1. 响应对象（res）的方法向客户端返回响应，终结请求响应的循环。如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起。
            res.download() 	提示下载文件。
            res.end() 	终结响应处理流程。
            res.json() 	发送一个 JSON 格式的响应。
            res.jsonp() 	发送一个支持 JSONP 的 JSON 格式的响应。
            res.redirect() 	重定向请求。
            res.render() 	渲染视图模板。
            res.send() 	发送各种类型的响应。
            res.sendFile 	以八位字节流的形式发送文件。
            res.sendStatus() 	设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。
    8. app.route();
        使用 app.route() **创建路由路径的链式路由句柄 **   。
        由于路径在一个地方指定，这样做有助于创建模块化的路由，而且减少了代码冗余和拼写错误。请参考 Router() 文档 了解更多有关路由的信息。
        `app.route('/book')
            .get(function(req, res) {
                res.send('Get a random book');
            })
            .post(function(req, res) {
                res.send('Add a book');
            })
            .put(function(req, res) {
                res.send('Update the book');
            });`
    9. express.Router
        使用 express.Router 类*创建模块化、可挂载的路由句柄。*
        Router 实例是一个完整的中间件和路由系统，因此常称其为一个 “mini-app”。 
        `var express = require('express');
            var router = express.Router();
            // 该路由使用的中间件
            router.use(function timeLog(req, res, next) {
            console.log('Time: ', Date.now());
            next();
            });
            // 定义网站主页的路由
            router.get('/', function(req, res) {
            res.send('Birds home page');
            });
            // 定义 about 页面的路由
            router.get('/about', function(req, res) {
            res.send('About birds');
            });
            module.exports = router;`
            然后在应用中加载路由模块：
            `var birds = require('./birds');
            app.use('/birds', birds);`
            应用即可处理发自 /birds 和 /birds/about 的请求，并且调用为该路由指定的 timeLog 中间件。

###2.中间件

    Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。    
    中间件（Middleware）是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。
    中间件的功能：
        1. 执行任何代码
        2. 修改请求和响应对象
        3. 终结请求-响应循环
        4. 调用堆栈中的下一个中间件
    如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起
    Express 应用可使用如下几种中间件：
        1. 应用级中间件
        2. 路由级中间件
        3. 错误处理中间件
        4. 内置中间件
        5. 第三方中间件
    使用可选则挂载路径，可在应用级别或路由级别装载中间件。另外，你还可以同时装在一系列中间件函数，从而在一个挂载点上创建一个子中间件栈。

    1. 应用级中间件
        应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。
        如果需要在中间件栈中跳过剩余中间件，调用 next('route') 方法将控制权交给下一个路由。 注意： next('route') 只对使用 app.VERB() 或 router.VERB() 加载的中间件有效。
    具体例子参考use.js
    2. 路由级中间件
        路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router()。
        路由级使用 router.use() 或 router.VERB() 加载。
##demo详解
     
    1. hello world.js
        一个基本的express应用，启动一个服务，并监听从3000端口进去的所有连接请求，他将对所有 (/) URL 或 路由 返回 “Hello World!” 字符串。对于其他所有路径全部返回 404 Not Found。
    2. router.js
        一个简单的express路由,用get/post等METHOD访问一个PATH后执行相应的HANDLER；
        app.METHOD(PATH, HANDLER)。
    3. static.js
        一个简单的托管静态文件展示
        1. 通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
        2. 将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：app.use(express.static('public'));现在，public 目录下面的文件就可以访问了。 http://127.0.0.1:3000/images/ad.png
        3. 所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。 
        4. 如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：
            app.use(express.static('public'));
            app.use(express.static('files'));
        5. 访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。
        6. 如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：
            app.use('/static', express.static('public'));
            现在，你就爱可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。
            http://127.0.0.1:3000/static/images/ad.png
    4. route.js
        创建了一个路由路径的链式路由句柄，由于路径在一个地方指定，这样做有助于创建模块化的路由，而且减少了代码冗余和拼写错误。
    5. Router.js
        创建了一个路由模块，并加载了一个中间件，定义了一些路由，并且将它们挂载至应用的路径上。然后在应用中加载路由模块：
        应用即可处理发自 /birds 和 /birds/about 的请求，并且调用为该路由指定的 timeLog 中间件。