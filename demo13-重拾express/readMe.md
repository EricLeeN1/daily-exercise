#Express 4.x API学习以及相关案例
##本人阅读Express官网翻译而作，转载请注明原作者

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

    1. 执行HTTP DELETE请求，参数是指定的路径，与指定的回调函数
    2. 可以提供类似中间件的多个回调函数。但是这些回调可以调用next(' route ')来绕过剩下的路由回调。您可以使用此机制在路由上强制执行预条件，如果没有理由继续当前路由，则将控制传递给后续路由。同app.get()的用法;

####4）.app.disable(name)

    1. 设置name的布尔属性为false，其中name是应用程序设置表的属性之一。为布尔属性调用app. set('foo '，false)与调用app. disable('foo ')相同。
    2. For example:
    app.disable('trust proxy');
    app.get('trust proxy');
    // => false

####5）.app.disabled(name)

    1. 如果name的布尔值是是disabled(false)，则返回true，这个name是应用程序设置表中的一个属性。
    2. For example:
        app.disabled('trust proxy');
        // => true
        app.enable('trust proxy');
        app.disabled('trust proxy');
        // => false

####6）.app.enable(name)

    1. 设置name布尔值为true，其中name是应用程序设置表的属性之一。调用app . set(“foo”，true)的布尔值与调用app. enable(“foo”)相同。
    2. For example:
        app.enable('trust proxy');
        app.get('trust proxy');
        // => true

####7）.app.enabled(name)

    1. 如果name属性值为(true)，则返回true，其中name是应用程序设置表的属性之一。
    2. For example:
        app.enabled('trust proxy');
        // => false
        app.enable('trust proxy');
        app.enabled('trust proxy');
        // => true

####8）.app.engine(ext, callback)

    1. 将给定的模板引擎回调注册为ext。
    2. 默认情况下，Express将根据文件扩展请求引擎。例如，如果您尝试渲染一个"foo.jade"文件，Express在内部调用以下命令，并在随后的调用中缓存请求以提高性能。
        app.engine('jade', require('jade').__express);
    3. 对于没有提供模版的引擎使用此方法。如果您希望“映射”一个和模板引擎不同的另一个扩展，则可以使用该框_express。
    例如，将EJS模板引擎映射到‘.html’文件:
        app.engine('html', require('ejs').renderFile);
        在这种情况下，EJS提供了一个. renderfile()方法，它有Express期望的相同签名:(路径path、选项options、回调callback)，但注意它将此方法别名为EJS。如果你使用的话，可以在内部使用。ejs的扩展，你不需要做任何事情。
    4. 有些模板引擎不遵循这个约定。比如consolidate.js这个库映射节点模板引擎以遵循这个约定，这样的话执行起来和express看起来没有任何不一样。
        var engines = require('consolidate');
        app.engine('haml', engines.haml);
        app.engine('html', engines.hogan);

####9）.app.get(name)

    1. 返回app中设置的name的值。name是app 设置表中的一个
    2. app.get('title');
    // => undefined
    app.set('title', 'My Site');
    app.get('title');
    // => "My Site"

####10）.app.get(path, callback [, callback ...])

    1. 执行对path的GET请求，path是路径，callback是指定的回调函数。
    2. 太常见的路由句柄

####11）.appapp.listen(port, [hostname], [backlog], [callback])

    1. 绑定和监听指定主机和端口上的连接。此方法与Node的http . server . listen()相同。
    2. 基础
        var express = require('express');
        var app = express();
        app.listen(3000);
    3. express()返回的app实际上是一个JavaScript函数，它被设计成可以作为一个回调来传递给Node的HTTP服务器以处理请求。这使得为您的app提供了相同的HTTP和HTTPS代码库版本变得很容易，因为app并没有继承这些(它只是一个回调):
        var express = require('express');
        var https = require('https');
        var http = require('http');
        var app = express();

        http.createServer(app).listen(80);
        https.createServer(options, app).listen(443);
    4. app.listen()方法是仅用于HTTP的便利方法:
        app.listen = function() {
        var server = http.createServer(this);
        return server.listen.apply(server, arguments);
        };

####12).app.METHOD(path, callback [, callback ...])

    1. 一个HTTP的请求路由，其中方法是HTTP方法的request，例如GET、PUT、POST等，以小写形式。因此，实际的方法是app. get()、app.post()、app. put()、等等。可查看路由
    2. Express支持与HTTP相同名称对应的以下路由方法:
        checkout    connect   copy    delete    get    ad    lock   merge   mkactivity
        mkcol    move    m-search    notify    options    patch    post    propfind    proppatch
        purge   put    report  search  subscribe   trace   unlock  unsubscribe
        使用括号表示法。例如,应用程序(“m-search”)(“/”,函数....。来将无效的JavaScript变量名转换为路由方法。
    3. 路由句柄同之前的路由句柄
    4. API文档只针对最流行的HTTP方法app . get()、app.post()、app . put()和app. delete()。然而，上面列出的其他方法的工作方式完全相同。
    5. 有一个特殊的路由方法，app. all()，它不是来自任何HTTP方法。它将中间件加载到所有请求方法的路径中。
        在下面的例子中，无论是使用GET、POST、PUT、DELETE还是任何其他HTTP请求方法都会执行对请求“/secret”，
        app.all('/secret', function (req, res, next) {
        console.log('Accessing the secret section ...')
        next() // pass control to the next handler
        })

####13）.app.param([name], callback)

    1. 为路由参数添加回调触发器，其中name是参数的name或array，函数是callback。回调函数的参数是请求对象request、响应对象response、next中间件，以及这个order顺序中的参数值。
    2. 如果名称是一个数组，那么回调函数会被注册给在数组声明的顺序中每一个声明的参数。此外，当前正在处理的路由中对于每个已声明的参数(除了最后一个参数)，在回调内的下一个调用将调用下一个声明参数的回调。对于最后一个参数，调用next将调用next中间件，就像如果name是一个字符串一样。
    3. 例子：当:user在路由路径中出现时，可以映射用户的加载逻辑来为路由自动提供req.user，或在参数输入上执行验证。
        `app.param('user', function(req, res, next, id) {
            // 尝试从用户模型获取用户详细信息并将其附加到请求对象
            User.find(id, function(err, user) {
                if (err) {
                    next(err);
                } else if (user) {
                    req.user = user;
                    next();
                } else {
                    next(new Error('failed to load user'));
                }
            });
        });`
    4. Param回调函数是在其定义的路由器上本地的。它们不是由安装的应用程序或路由器继承的。因此，在应用程序中定义的param回调只能由应用程序路由上定义的路由参数触发。
    所有的param回调都将在任何处理程序之前调用，在请求-响应周期中，它们将只被调用一次，即使参数在多个路由中是匹配的，如例子expParam.js,expParam1.js所示。
        第一个例子中name是一个字符串，只执行一次，
        第二个例子中name是数组，每个字符串只执行一次，即array的长度即是执行的次数

####14）.app.path()

    1. 返回应用程序的规范路径，一个字符串
    2. 例子见expPath.js
        1. console.log(app.path());// ''
        console.log(blog.path());// '/blog'
        console.log(blogAdmin.path());// '/blog/admin'
    3. 在安装应用程序复杂的情况下，这种方法的行为会变得非常复杂:通常最好使用req.baseUrl获得应用程序的规范路径。

####15).app.post(path, callback [, callback ...])

    1. 执行对path的post请求，path是路径，callback是指定的回调函数。
    2. 太常见的路由句柄

####16).app.put(path, callback [, callback ...])

    1. 执行对path的put请求，path是路径，callback是指定的回调函数。
    2. 太常见的路由句柄

####17).app.render(view, [locals], callback)

    1. 通过回调函数返回呈现的HTML。它接受一个可选参数，该参数是包含视图的局部变量的对象。它就像res.render()，但它不能自己将呈现的视图发送给客户端。
    2. 将app.render() 看作是生成呈现的视图字符串的实用函数。内部的res.render()使用app. render()呈现视图。
    3. 本地变量缓存用于启用视图缓存。如果您想在开发期间缓存视图，请将其设置为true;默认情况下，视图缓存是在生产中启用的。

####18）.app.route(path)

    1. 返回单个路由的实例，您可以使用它来处理带有可选中间件的HTTP请求词例如GET、PUT、POST等。使用app. route()以避免重复的路由名称(和诸如此类的错误)。
    2. 一般写法
        `var app = express();
        app.route('/events')
        .all(function(req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        })
        .get(function(req, res, next) {
        res.json(...);
        })
        .post(function(req, res, next) {
        // maybe add a new event...
        })`

####19）.app.set(name, value)

    1. 设置name的值为value，其中name是应用程序设置表的属性之一。
    2. 对一个布尔属性调用app . set(“foo”，true)与调用app. enable(“foo”)相同。类似地，对一个布尔属性调用app. set('foo '，false)与调用app. disable('foo ')相同。
        上面写的几个大致意思都一样。如果app.后面是true语意的话就是设置里面参数为true，反之false
        使用app. get()检索设置的值
    3. app设置
        如果name是程序设置之一，它将影响到程序的行为。下边列出了程序中的设置。
        属性 	类型 	值 	默认
        case sensitive routing 	Boolean 	启用区分大小写。 	不启用。对/Foo和/foo处理是一样。
        env 	String 	环境模型。 	process.env.NODE_ENV(NODE_ENV环境变量)或者"development"
        etag 	Varied 	设置ETag响应头。可取的值，可以查阅etag options table。更多关于HTTP ETag header。 	weak
        jsonp callback name 	String 	指定默认JSONP回调的名称。 	?callback=
        json replacer 	String 	JSON替代品回调 	null
        json spaces 	Number 	当设置了这个值后，发送缩进空格美化过的JSON字符串。 	Disabled
        query parser 	Varied 	设置值为false来禁用query parser，或者设置simple,extended，也可以自己实现query string解析函数。simple基于Node原生的query解析，querystring。 	"extend"
        strict routing 	Boolean 	启用严格的路由。 	不启用。对/foo和/foo/的路由处理是一样。
        subdomain offset 	Number 	用来删除访问子域的主机点分部分的个数 	2
        trust proxy 	Varied 	指示app在一个反向代理的后面，使用x-Forwarded-*来确定连接和客户端的IP地址。注意:X-Forwarded-*头部很容易被欺骗，所有检测客户端的IP地址是靠不住的。trust proxy默认不启用。当启用时，Express尝试通过前端代理或者一系列代理来获取已连接的客户端IP地址。req.ips属性包含了已连接客户端IP地址的一个数组。为了启动它，需要设置在下面trust proxy options table中定义的值。trust proxy的设置实现使用了proxy-addr包。如果想获得更多的信息，可以查阅它的文档 	Disable
        views 	String or Array 	view所在的目录或者目录数组。如果是一个数组，将按在数组中的顺序来查找view。 	process.cwd() + '/views'
        view cache 	Boolean 	启用视图模板编译缓存。 	在生产环境默认开启。
        view engine 	String 	省略时，默认的引擎被扩展使用。 	
        x-powered-by 	Boolean 	启用X-Powered-By:ExpressHTTP头部 	true
    4. trust proxy属性设置
        Type	Value
        Boolean 	如果为true，客户端的IP地址作为X-Forwarded-*头部的最左边的条目。如果为false，可以理解为app直接与英特网直连，客户端的IP地址衍生自req.connection.remoteAddress。false是默认设置。
        IP addresses 	一个IP地址，子网，或者一组IP地址，和委托子网。下面列出的是一个预先配置的子网名列表。
                    loopback - 127.0.0.1/8, ::1/128
                    linklocal - 169.254.0.0/16, fe80::/10
                    uniquelocal - 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, fc00::/7
                    使用下面方法中的任何一种来设置IP地址:
                    app.set('trust proxy', 'loopback') // specify a single subnet
                    app.set('trust proxy', 'loopback, 123.123.123.123') // specify a subnet and an address
                    app.set('trust proxy', 'loopback, linklocal, uniquelocal') // specify multiple subnets as CSV
                    app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']) // specify multiple subnets as an array

                    当指定IP地址之后, 这个IP地址或子网会被设置了这个IP地址或子网的`app`排除在外, 最靠近程序服务的没有委托的地址将被看做客户端IP地址。
        Number    信任从反向代理到app中间小于等于n跳的连接为客户端。
        Function 	客户自定义委托代理信任机制。如果你使用这个，请确保你自己知道你在干什么。
                    app.set('trust proxy', function (ip) {
                    if (ip === '127.0.0.1' || ip === '123.123.123.123') return true; // trusted IPs
                    else return false;
                    })
    5. etag属性设置
    Type	Value
	Boolean 	设置为true，启用weak ETag。这个是默认设置。设置false，禁用所有的ETag。
	String 	如果是strong，使能strong ETag。如果是weak，启用weak ETag。
	Function 	客户自定义`ETag`方法的实现. 如果你使用这个，请确保你自己知道你在干什么。
				app.set('etag',function (body, encoding) {return generateHash(body, encoding); // consider the function is defined})

####20）.app.use([path,], function [, function...])

	1. 挂载中间件方法到路径上。如果路径未指定，那么默认为"/"。
	2. 一个路由将匹配任何路径如果这个路径以这个路由设置路径后紧跟着"/"。比如：app.use('/appale', ...)将匹配"/apple"，"/apple/images"，"/apple/images/news"等。见例子expUse.js
	3. 在一个路径上挂载一个中间件之后，每当请求的路径的前缀部分匹配了这个路由路径，那么这个中间件就会被执行。
	由于默认的路径为/，中间件挂载没有指定路径，那么对于每个请求，这个中间件都会被执行。
	4. 中间件方法是顺序处理的，所以中间件包含的顺序是很重要的。
		1.         // 这个中间件将不允许req超越它
        app.use(function(req, res, next) {
            res.send('Hello World');
        });
        // 路由永远到不了这里
        app.use('/', function(req, res) {
            res.send('Welcome');
        });
	5. 路径可以是代表路径的一串字符，一个路径模式，一个匹配路径的正则表达式，或者他们的一组集合。
    下面是路径的简单的例子。
	Type 	Example
	Path 	// will match paths starting with /abcd
			app.use('/abcd', function (req, res, next{
  			next();
			})

	Path Pattern 	// will match paths starting with /abcd and /abd
					app.use('/abc?d', function (req, res, next) {
  					next();
					})
					// will match paths starting with /abcd, /abbcd, /abbbbbcd and so on
					app.use('/ab+cd', function (req, res, next) {
  					next();
					})
					// will match paths starting with /abcd, /abxcd, /abFOOcd, /abbArcd and so on
					app.use('/ab\*cd', function (req, res, next) {
  					next();
					})
					// will match paths starting with /ad and /abcd
					app.use('/a(bc)?d', function (req, res, next) {
  					next();
					})

	Regular Expression 	// will match paths starting with /abc and /xyz
						app.use(/\/abc|\/xyz/, function (req, res, next) {
  						next();
						})
	Array 			// will match paths starting with /abcd, /xyza, /lmn, and /pqr
					app.use(['/abcd', '/xyza', /\/lmn|\/pqr/], function (req, res, next) {
  					next();
					})
	方法可以是一个中间件方法，一系列中间件方法，一组中间件方法或者他们的集合。由于router和app实现了中间件接口，你可以像使用其他任一中间件方法那样使用它们。
	Usage 	Example
	单个中间件 	你可以局部定义和挂载一个中间件。
				app.use(function (req, res, next) {
  				next();
				})
				一个router是有效的中间件。
				var router = express.Router();
				router.get('/', function (req, res, next) {
  				next();
				})
				app.use(router);
				一个Express程序是一个有效的中间件。
				var subApp = express();
				subApp.get('/', function (req, res, next) {
  				next();
				})
				app.use(subApp);
	一系列中间件 	对于一个相同的挂载路径，你可以挂载超过一个的中间件。
				var r1 = express.Router();
				r1.get('/', function (req, res, next) {
  				next();
				})
				var r2 = express.Router();
				r2.get('/', function (req, res, next) {
  				next();
				})
				app.use(r1, r2);
	一组中间件 	在逻辑上使用一个数组来组织一组中间件。如果你传递一组中间件作为第一个或者唯一的参数，接着你需要指定挂载的路径。
				var r1 = express.Router();
				r1.get('/', function (req, res, next) {
  				next();
				})
				var r2 = express.Router();
				r2.get('/', function (req, res, next) {
  				next();
				})
				app.use('/', [r1, r2]);

	组合 	你可以组合下面的所有方法来挂载中间件。
			function mw1(req, res, next) { next(); }
			function mw2(req, res, next) { next(); }
			var r1 = express.Router();
			r1.get('/', function (req, res, next) { next(); });
			var r2 = express.Router();
			r2.get('/', function (req, res, next) { next(); });
			var subApp = express();
			subApp.get('/', function (req, res, next) { next(); });
			app.use(mw1, [mw2, r1, r2], subApp);
	下面是一些例子，在Express程序中使用express.static中间件。
	为程序托管位于程序目录下的public目录下的静态资源：
    // GET /style.css etc
    app.use(express.static(__dirname + '/public'));
	在/static路径下挂载中间件来提供静态资源托管服务，只当请求是以/static为前缀的时候。
    // GET /static/style.css etc.
    app.use('/static', express.static(express.__dirname + '/public'));
	通过在设置静态资源中间件之后加载日志中间件来关闭静态资源请求的日志。
       app.use(express.static(__dirname + '/public'));
       app.use(logger());
	托管静态资源从不同的路径，但./public路径比其他更容易被匹配：
    	app.use(express.static(__dirname + '/public'));
    	app.use(express.static(__dirname + '/files'));
    	app.use(express.static(__dirname + '/uploads'));

##三.Request(请求)由于文件过长请参看request.md