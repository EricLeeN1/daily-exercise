接readme.md

##三.Request(请求)

    req对象代表了一个HTTP请求，其具有一些属性来保存请求中的一些数据，比如query string，parameters，body，HTTP headers等等。在本文档中，按照惯例，这个对象总是简称为req(http响应简称为res)，但是它们实际的名字由这个回调方法在那里使用时的参数决定。 

###1.Properties（属性）

    在Express 4中，req.files默认在req对象中不再是可用的。为了通过req.files对象来获得上传的文件，你可以使用一个multipart-handling(多种处理的工具集)中间件，比如busboy，multer，formidable，multipraty，connect-multiparty或者pez。

####1）. req.app

    这个属性持有express程序实例的一个引用，其可以作为中间件使用。
    如果你按照这个模式，你创建一个模块导出一个中间件，这个中间件只在你的主文件中require()它，那么这个中间件可以通过req.app来获取express的实例。 

####2）.req.baseUrl

    一个路由实例挂载的Url路径。例子expBaseUrl.js
    即使你使用的路径模式或者一系列路径模式来加载路由，baseUrl属性返回匹配的字符串，而不是路由模式。expBaseUrl.js例子，greet路由被加载在两个路径模式上。
    当一个请求路径是/greet/jp，baseUrl是/greet，当一个请求路径是/hello/jp，req.baseUrl是/hello。
    req.baseUrl和app对象的mountpath属性相似，除了app.mountpath返回的是路径匹配模式。

####3).req.body

    1. request body中包含提交的键值对。默认情况下，它是未定义的，在使用body-parsing中间件(如 body-parser和multer)时填充。一般用来处理post表单提交？？

####4）.req.cookies

    1. 当使用cookie - parser中间件时，该属性是包含请求发送的cookie的对象。如果请求不包含cookie，则默认为{}。
    2. // Cookie: name=tj
        req.cookies.name
        // => "tj"

####5）.req.fresh

    1. 指示这个请求是否是新鲜的。其和req.stale是相反的。
    2. 当cache-control请求头没有no-cache指示和下面中的任一一个条件为true，那么其就为true：
        1. if-modified-since请求头被指定，和last-modified请求头等于或者早于modified响应头。
        2. if-none-match请求头是*。
        3. if-none-match请求头在被解析进它的指令之后，和etag响应头的值不相等
            ps:If-None-Match作用: If-None-Match和ETag一起工作，工作原理是在HTTP Response中添加ETag信息。 当用户再次请求该资源时，将在HTTP Request 中加入If-None-Match信息(ETag的值)。如果服务器验证资源的ETag没有改变（该资源没有更新），将返回一个304状态告诉客户端使用本地缓存文件。否则将返回200状态和新的资源和Etag. 使用这样的机制将提高网站的性能

####6）.req.hostname(请求的主机名)
    
    1. 包含了源自HostHTTP头部的hostname。
    2. 当trust proxy设置项被设置为启用值，X-Forwarded-Host头部被使用来代替Host。这个头部可以被客户端或者代理设置。


####7）.req.ip

    1. 请求的远程IP地址。
    2. 如果启用了信任代理，则它是上游地址;有关更多信息，

####8）.req.ips

    1. 当trust proxy设置为true时，该属性包含在“X-Forwarded-For”请求头中指定的IP地址数组。否则，它包含一个空数组。
    2. 如果X-Forwarded-For是client，proxy1，proxy2，req.ips就是["clinet", "proxy1", "proxy2"]，这里proxy2就是最远的下游。

####9）.req.originalUrl

    req.url不是一个原生的Express属性，它继承自Node's http module。
    这个属性很像req.url；然而，其保留了原版的请求链接，允许你自由地重定向req.url到内部路由。比如，app.use()的mounting特点可以重定向req.url跳转到挂载点。

####10）.req.params

    一个对象，其包含了一系列的属性，这些属性和在路由中命名的参数名是一一对应的。例如，如果你有/user/:name路由，name属性可作为req.params.name。这个对象默认值为{}
    当你使用正则表达式来定义路由规则，捕获组的组合一般使用req.params[n]，这里的n是第几个捕获组。这个规则被施加在无名通配符匹配，比如/file/*的路由：

####11）.req.path

    包含请求URL的部分路径。
    当在一个中间件中被调用，挂载点不包含在req.path中。

####12）.req.protocol（协议）

    请求的协议，一般为http，当启用TLS加密，则为https。
    当trust proxy设置一个启用的参数，如果存在X-Forwarded-Proto头部的话，其将被信赖和使用。这个头部可以被客户端或者代理设置。

####13）.req.query（参数）

    一个对象，为每一个路由中的query string参数都分配一个属性。如果没有query string，它就是一个空对象，{}。多用于处理get请求
    对象的对象
        // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
       req.query.shoe.color
        // => "blue"
        req.query.shoe.type
        // => "converse"

####14）.req.route

    当前匹配的路由，其为一串字符。

####15）.req.secure

    一个布尔值，如果建立的是TLS的连接，那么就为true。等价与：'https' == req.protocol;

####16）.req.signedCookies

    当使用cookie-parser中间件的时候，这个属性包含的是请求发过来的签名cookies，这个属性取得的是不含签名，可以直接使用的值。签名的cookies保存在不同的对象中来体现开发者的意图；不然，一个恶意攻击可以被施加在req.cookie值上(它是很容易被欺骗的)。记住，签名一个cookie不是把它藏起来或者加密；而是简单的防止篡改(因为签名使用的加密是私人的)。如果没有发送签名的cookie，那么这个属性默认为{}。

####17）.req.stale

    指示这个请求是否是stale(陈旧的)，它与req.fresh是相反的。

####18）.req.subdomains

    请求中域名的子域名数组。

####19）.req.xhr

    一个布尔值，如果X-Requested-With的值为XMLHttpRequest，那么其为true，其指示这个请求是被一个客服端库发送，比如jQuery。
    判断是否使用ajax?

###2.Methods（方法）

####1).req.accepts(types)

    检查这个指定的内容类型是否被接受，基于请求的Accept HTTP头部。这个方法返回最佳匹配，如果没有一个匹配，那么其返回undefined(在这个case下，服务器端应该返回406和"Not Acceptable")。
    type值可以是一个单的MIME type字符串(比如application/json)，一个扩展名比如json，一个逗号分隔的列表，或者一个数组。对于一个列表或者数组，这个方法返回最佳项(如果有的话)。

####2).req.acceptsCharsets(charset [, ...])

    返回指定的字符集集合中第一个的配置的字符集，基于请求的Accept-CharsetHTTP头。如果指定的字符集没有匹配的，那么就返回false。 

####3).req.acceptsEncodings(encoding[, ...])

    返回指定的编码集合中第一个的配置的编码，基于请求的Accept-EncodingHTTP头。如果指定的编码集没有匹配的，那么就返回false。

####4).req.acceptsLanguages(lang [, ...])

    返回指定的语言集合中第一个的配置的语言，基于请求的Accept-LanguageHTTP头。如果指定的语言集没有匹配的，那么就返回false。

####5).req.get(field)

    返回指定的请求HTTP头部的域内容(不区分大小写)。Referrer和Referer的域内容可互换。
    其是req.header(field)的别名。

####6).req.is(type)

    如果进来的请求的Content-type头部域匹配参数type给定的MIME type，那么其返回true。否则返回false。

####7）.req.param(name [, defaultValue])

    过时的。可以在适合的情况下，使用req.params，req.body或者req.query。

##四、Response（响应）见Response.md