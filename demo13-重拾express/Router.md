##五、Router（路由）接Response.md

    一个router对象是一个单独的实例关于中间件和路由。你可以认为其是一个"mini-application"（迷你程序），其具有操作中间件和路由方法的能力。每个Express程序有一个内建的app路由。
    路由自身表现为一个中间件，所以你可以使用它作为app.use()方法的一个参数或者作为另一个路由的use()的参数。
    顶层的express对象有一个Router()方法，你可以使用Router()来创建一个新的router对象。

###1.Router([options])

    var router = express.Router([options]); => 可以创建一个路由
    options参数可以指定路由的行为，其有下列选择：
    属性 	描述 	默认值 	可用性
    caseSensitive 	是否区分大小写 	默认不启用。对待/Foo和/foo一样。 	
    mergeParams 	保存父路由的res.params。如果父路由参数和子路由参数冲突，子路由参数优先。 	false 	4.5.0+
    strict 	使能严格路由。 	默认不启用，/foo和/foo/被路由一样对待处理 	
    你可以将router当作一个程序，可以在其上添加中间件和HTTP路由方法(例如get，put，post等等)。

    // invoked for any requests passed to this router
    router.use(function(req, res, next) {
      // .. some logic here .. like any other middleware
      next();
    });
    // will handle any request that ends in /events
    // depends on where the router is "use()'d"
    router.get('/events', function(req, res, next) {
      // ..
    });
    你可以在一个特别的根URL上挂载一个路由，这样你就以将你的各个路由放到不同的文件中或者甚至是mini的程序。
    
    // only requests to /calendar/* will be sent to our "router"
    app.use('/calendar', router);

###2.Methods(方法)

####1）.router.all(path, [callback, ...] callback)

    这个方法和router.METHOD()方法一样，除了这个方法会匹配所有的HTTP动作。
    这个方法对想映射全局的逻辑处理到特殊的路径前缀或者任意匹配是十分有用的。比如，如果你放置下面所示的这个路由在其他路由的前面，那么其将要求从这个点开始的所有的路由进行验证操作和自动加载用户信息。记住，这些全局的逻辑操作，不需要结束请求响应周期：loaduser可以执行一个任务，然后调用next()来将执行流程移交到随后的路由
        router.all('*', requireAuthentication, loadUser);
        相等的形式:
        router.all('*', requireAuthentication)
        router.all('*', loadUser);
    这是一个白名单全局功能的例子。这个例子很像前面的，不过其仅仅作用于以/api开头的路径:
        router.all('/api/*', requireAuthentication);

    ####2）.router.METHOD(path, [callback, ...] callback)
    
    router.METHOD()方法提供了路由方法在Express中，这里的METHOD是HTTP方法中的一个，比如GET，PUT，POST等等，但router中的METHOD是小写的。所以，实际的方法是router.get()，router.put()，router.post()等等。
    你可以提供多个回调函数，它们的行为和中间件一样，除了这些回调可以通过调用next('router')来绕过剩余的路由回调。你可以使用这个机制来为一个路由设置一些前提条件，如果请求没有满足当前路由的处理条件，那么传递控制到随后的路由。 

    ####3）.router.param(name, callback)
    给路由参数添加回调触发器，这里的name是参数名，function是回调方法。回调方法的参数按序是请求对象，响应对象，下个中间件，参数值和参数名。虽然name在技术上是可选的，但是自Express V4.11.0之后版本不推荐使用(见下面)。

    不像app.param()，router.param()不接受一个数组作为路由参数。
    对于Param的回调定义的路由来说，他们是局部的。它们不会被挂载的app或者路由继承。所以，定义在router上的param回调只有是在router上的路由具有这个路由参数时才起作用。
    在定义param的路由上，param回调都是第一个被调用的，它们在一个请求-响应循环中都会被调用一次并且只有一次，即使多个路由都匹配，如下面的例子：

    ####4）.router.route(path)

    返回一个单例模式的路由的实例，之后你可以在其上施加各种HTTP动作的中间件。使用router.route()来避免重复路由名字(例如错字错误)--说的意思应该是使用router.route()这个单例方法来避免同一个路径多个路由实例。

构建在上面的router.param()例子之上，下面的代码展示了怎么使用router.route()来指定各种HTTP方法的处理句柄。

    ####5）.router.use([path], [function, ...] function)

    给可选的path参数指定的路径挂载给定的中间件方法，未指定path参数，默认值为/。
    这个方法类似于app.use()。一个简单的例子和用例在下面描述。查阅app.use()获得更多的信息
    中间件就像一个水暖管道，请求在你定义的第一个中间件处开始，顺着中间件堆栈一路往下，如果路径匹配则处理这个请求。
