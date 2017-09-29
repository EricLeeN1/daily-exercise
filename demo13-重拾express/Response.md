##四、Response（响应）接request.md

    res对象代表了当一个HTTP请求到来时，Express程序返回的HTTP响应。在本文档中，按照惯例，这个对象总是简称为res(http请求简称为req)，但是它们实际的名字由这个回调方法在那里使用时的参数决定。

###1.Properties(属性)

####1). res.app

    这个属性持有express程序实例的一个引用，其可以在中间件中使用。
    res.app和请求对象中的req.app属性是相同的。

####2).res.headersSent

    布尔类型的属性，指示这个响应是否已经发送HTTP头部。

####3).res.locals

    一个对象，其包含了本次请求的响应中的变量和因此它的变量只提供给本次请求响应的周期内视图渲染里使用(如果有视图的话)。
    其他方面，其和app.locals是一样的。
    这个参数在导出请求级别的信息是很有效的，这些信息比如请求路径，已认证的用户，用户设置等等。

###2.Methods()方法

####1).res.append(field [, value])

    1. 在指定的field的HTTP头部追加特殊的值value。如果这个头部没有被设置，那么将用value新建这个头部。value可以是一个字符串或者数组。
    注意：在res.append()之后调用app.set()函数将重置前面设置的值。

####2).res.attachment([filename])

    1. 设置HTTP响应的Content-Disposition头内容为"attachment"。如果提供了filename，那么将通过res.type()获得扩展名来设置Content-Type，并且设置Content-Disposition内容为"filename="parameter。

####3).res.cookie(name, value [,options])

    1. 设置name和value的cookie，value参数可以是一串字符或者是转化为json字符串的对象。
    2. options是一个对象，其可以有下列的属性。
    属性 	类型 	描述
    domain 	String 	设置cookie的域名。默认是你本app的域名。
    expires 	Date 	cookie的过期时间，GMT格式。如果没有指定或者设置为0，则产生新的cookie。
    httpOnly 	Boolean 	这个cookie只能被web服务器获取的标示。
    maxAge 	String 	是设置过去时间的方便选项，其为过期时间到当前时间的毫秒值。
    path 	String 	cookie的路径。默认值是/。
    secure 	Boolean 	标示这个cookie只用被HTTPS协议使用。
    signed 	Boolean 	指示这个cookie应该是签名的。
    3. res.cookie()所作的都是基于提供的options参数来设置Set-Cookie头部。没有指定任何的options，那么默认值在RFC6265中指定。
    4. 当我们使用cookie-parser中间件的时候，这个方法也支持签名的cookie。简单地，在设置options时包含signed选项为true。然后res.cookie()将使用传递给cookieParser(secret)的密钥来签名这个值。
    res.cookie('name', 'tobi', {'signed':true});

####4). res.clearCookie(name [,options])

    1. 根据指定的name清除对应的cookie。
        res.cookie('name', 'tobi', {'path':'/admin'});
        res.clearCookie('name', {'path':'admin'});

####5）.res.download(path, [,filename], [,fn])

    传输path指定文件作为一个附件。通常，浏览器提示用户下载。默认情况下，Content-Disposition头部"filename="的参数为path(通常会出现在浏览器的对话框中)。通过指定filename参数来覆盖默认值。
    当一个错误发生时或者传输完成，这个方法将调用fn指定的回调方法。这个方法使用res.sendFile()来传输文件。
    例子resDownload.js

####6).res.end([data] [, encoding])

    结束本响应的过程。这个方法实际上来自Node核心模块，具体的是response.end() method of http.ServerResponse。
    用来快速结束请求，没有任何的数据。如果你需要发送数据，可以使用res.send()和res.json()这类的方法。

####7).res.format(object)

    1. 进行内容协商，根据请求的对象中AcceptHTTP头部指定的接受内容。它使用req.accepts()来选择一个句柄来为请求服务，这些句柄按质量值进行排序。如果这个头部没有指定，那么第一个方法默认被调用。当不匹配时，服务器将返回406"Not Acceptable"，或者调用default回调。 

####8).res.get(field)

    返回field指定的HTTP响应的头部。匹配是区分大小写。    res.get('Content-Type');// => "text/plain"

####9).res.json([body])

    发送一个json的响应。这个方法和将一个对象或者一个数组作为参数传递给res.send()方法的效果相同。不过，你可以使用这个方法来转换其他的值到json，例如null，undefined。(虽然这些都是技术上无效的JSON)。
    例子resDownload.js

####10）.res.jsonp([body])

    发送一个json的响应，并且支持JSONP。这个方法和res.json()效果相同，除了其在选项中支持JSONP回调。
    jsonp的回调方法简单写作callback。可以通过jsonp callback name设置来重写它。

####11).res.links(links)

    连接这些links，links是以传入参数的属性形式提供，连接之后的内容用来填充响应的Link HTTP头部。

####12).res.location(path)

    设置响应的LocationHTTP头部为指定的path参数。
    当path参数为back时，其具有特殊的意义，其指定URL为请求对象的Referer头部指定的URL。如果请求中没有指定，那么其即为"/"。
    Express传递指定的URL字符串作为回复给浏览器响应中的Location头部的值，不检测和操作，除了back这个参数。浏览器会将用户重定向到location设置的url或者Referer的url（back参数的情况）

####13).res.redirect([status,] path)

    1. 重定向来源于指定path的URL，以及指定的HTTP status codestatus。如果你没有指定status，status code默认为"302 Found"。
    2. 重定向也可以是完整的URL，来重定向到不同的站点。    res.redirect('http://google.com');
    3. 重定向也可以相对于主机的根路径。比如，如果程序的路径为http://example.com/admin/post/new，那么下面将重定向到http://example.com/admim: => res.redirect('/admin');
    4. 重定向也可以相对于当前的URL。比如，来之于http://example.com/blog/admin/(注意结尾的/)，下面将重定向到http://example.com/blog/admin/post/new。
    5. 重定向也可以相对于当前的URL。比如，来之于http://example.com/blog/admin/(注意结尾的/)，下面将重定向到http://example.com/blog/admin/post/new。res.redirect('post/new');
    6. 如果来至于http://example.com/blog/admin（没有尾部/），重定向post/new，将重定向到http://example.com/blog/post/new。如果你觉得上面很混乱，可以把路径段认为目录(有'/')或者文件，这样是可以的。相对路径的重定向也是可以的。如果你当前的路径为http://example.com/admin/post/new，下面的操作将重定向到http://example.com/admin/post：
        res.redirect('..');
    7. back将重定向请求到referer，当没有referer的时候，默认为/。
        res.redirect('back');

####14).res.render(view [, locals] [, callback])

    渲染一个视图，然后将渲染得到的HTML文档发送给客户端。
    可选的参数为:
        locals，定义了视图本地参数属性的一个对象。
        callback，一个回调方法。如果提供了这个参数，render方法将返回错误和渲染之后的模板，并且不自动发送响应。当有错误发生时，可以在这个回调内部，调用next(err)方法。

####15).res.send([body])

    发送HTTP响应。
    body参数可以是一个Buffer对象，一个字符串，一个对象，或者一个数组。
    对于一般的非流请求，这个方法可以执行许多有用的的任务：比如，它自动给Content-LengthHTTP响应头赋值(除非先前定义)，也支持自动的HEAD和HTTP缓存更新。
    当参数是一个Buffer对象，这个方法设置Content-Type响应头为application/octet-stream,除非事先提供，如下所示:
        res.set('Content-Type', 'text/html');
        res.send(new Buffer('<p>some html</p>'));
    当参数是一个字符串，这个方法设置Content-Type响应头为text/html：
        res.send('<p>some html</p>');
    当参数是一个对象或者数组，Express使用JSON格式来表示：
        res.send({user:'tobi'});
        res.send([1, 2, 3]);

####16).res.sendFile(path [, options] [, fn])

    传输path指定的文件。根据文件的扩展名设置Content-TypeHTTP头部。除非在options中有关于root的设置，path一定是关于文件的绝对路径。 
    下面的表提供了options参数的细节:
    属性 	描述 	默认值 	可用版本
    maxAge 	设置Cache-Control的max-age属性，格式为毫秒数，或者是ms format的一串字符串 	0 	
    root 	相对文件名的根目录 		
    lastModified 	设置Last-Modified头部为此文件在系统中的最后一次修改时间。设置false来禁用它 	Enable 	4.9.0+
    headers 	一个对象，包含了文件相关的HTTP头部。 		
    dotfiles 	是否支持点开头文件名的选项。可选的值"allow","deny","ignore" 	"ignore" 
    当传输完成或者发生了什么错误，这个方法调用fn回调方法。如果这个回调参数指定了和一个错误发生，回调方法必须明确地通过结束请求-响应循环或者传递控制到下个路由来处理响应过程。 

####17).res.sendStatus(statusCode)

    1. 设置响应对象的HTTP status code为statusCode并且发送statusCode的相应的字符串形式作为响应的Body。	
        res.sendStatus(200); // equivalent to res.status(200).send('OK');
        res.sendStatus(403); // equivalent to res.status(403).send('Forbidden');
        res.sendStatus(404); // equivalent to res.status(404).send('Not Found');
        res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
    2. 如果一个不支持的状态被指定，这个HTTP status依然被设置为statusCode并且用这个code的字符串作为Body。
        res.sendStatus(2000); // equivalent to res.status(2000).send('2000');

###更多关于http 状态码的方法

####18）.res.set(field [, value])

    设置响应对象的HTTP头部field为value。为了一次设置多个值，那么可以传递一个对象为参数。
    res.set('Content-Type', 'text/plain');
    res.set({
        'Content-Type':'text/plain',
        'Content-Length':'123',
        'ETag':'123456'
    })
    其和res.header(field [,value])效果一致。

####19).res.status(code)

    使用这个方法来设置响应对象的HTTP status。其是Node中response.statusCode的一个连贯性的别名。
        res.status(403).end();
        res.status(400).send('Bad Request');
        res.status(404).sendFile('/absolute/path/to/404.png');

####20).res.type(type)

    程序将设置Content-TypeHTTP头部的MIME type，如果这个设置的type能够被mime.lookup解析成正确的Content-Type。如果type中包含了/字符，那么程序会直接设置Content-Type为type。
        res.type('.html');              // => 'text/html'
        res.type('html');               // => 'text/html'
        res.type('json');               // => 'application/json'
        res.type('application/json');   // => 'application/json'
        res.type('png');                // => image/png:

####21).res.vary(field)

    在没有Vary应答头部时增加Vary应答头部。
    ps：vary的意义在于告诉代理服务器/缓存/CDN，如何判断请求是否一样，vary中的组合就是服务器/缓存/CDN判断的依据，比如Vary中有User-Agent，那么即使相同的请求，如果用户使用IE打开了一个页面，再用Firefox打开这个页面的时候，CDN/代理会认为是不同的页面，如果Vary中没有User-Agent，那么CDN/代理会认为是相同的页面，直接给用户返回缓存的页面，而不会再去web服务器请求相应的页面。通俗的说就相当于field作为了一个缓存的key来判断是否命中缓存
    res.vary('User-Agent').render('docs');

##五、Router（路由）接Router.md