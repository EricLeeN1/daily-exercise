#日常mode练习

  01- 省市县三级下拉菜单
    
    包含文件(.json/.js/.css/.html)--2017/06/05/22:13:15
    
  02- 下雪或者money
    
    包含文件(.js/.css/.html)--2017/6/8/17:21:15

#NPM常用命令行命令与node部分模块Api

##1.NPM--常用命令行命令

  npm install 安装

  npm uninstall 卸载

  npm help查看所有命令行

  npm help <command>查看某条命令的详细帮助

  npm update <package>更新当前目录下node_modules子目录里边的对应模块
	
  npm update <package> -g全局更新对应模块
	
  npm cache clear 清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人
	
  npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码
##2.node--REPL
	--(读取，执行，打印，循环)
	命令行输入node然后enter进入环境
	Ctrl+c两次退出==Ctrl+d==.exit==process.exit()退出环境
	.help--列出使用命令
	tab--列出当前命令
	.break--退出多行表达式
	.clear--退出多行表达式
	.sava filename--保存当前绘画到指定文件
	.load filename--载入当前绘画的文件内容

##3.http--模块
	//引入http模块
	var http = require('http');
	//使用 http.createServer() 方法创建服务器
	http.createServer(function (request, response) {
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
	}).listen(8888);
	listen();监听设置的端口
##4.events模块
	//引入envents模块
	var events = require('events');
	//创建eventEmitter对象（events模块只有这一个对象）
	var eventEmitter = new event.eventEmitter();==>核心就是事件触发与事件监听器功能的封装
	// 绑定事件及事件的处理程序
	eventEmitter.on('eventName', eventHandler);
	// 触发事件
	eventEmitter.emit('eventName');
	详细属性与方法
	on 函数用于绑定事件函数
	emit属性用用于触发一个事件。
	1.addListenner(event,callback);
		为指定事件添加一个监听器到监听器数组的尾部。
	2.on(event,callback)
		为指定事件注册一个监听器，接收一个字符串event和一个回调函数！
	3.once(event,callback)
		为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻接触该监听器。
	4.removeListener(event,callback);
		移除指定事件的某个监视器，必须是已经注册过的！
	5.removeAllListeners([event])
		移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器。
	6.setMaxListeners(n)
		默认如果添加的监听器超过10个就会输出警告信息。此函数用于提高边听器的默认限制的数量！
	7.listeners(event);
		返回指定事件的监听器数组
	8.emit(event,[arg1],[arg2],[...])
		按参数的顺序执行每个监听器，如果事件有注册监听返回true,否则返回false
##5.Buffer(缓冲区)
	--出现原因：js语言只有字符串数据类型，没有二进制数据类型。Buffer用来创建一个专门存储二进制数据的缓存区。node自带
	1.创建Buffer
		var buf = new Buffer(10);
	2.写入缓存区==>返回实际写入的大小		
		buf.write(string, offset, length, encoding)==>返回实际写入的大小，buffer空间不足的话，只写入部分。
		string - 写入缓存区的字符串
		offset - 缓冲区开始写入的索引值， 默认为0
		length - 写入的字节数， 默认为Buffer.length
		encoding - 使用的编码.默认 'utf-8'
	3.从缓冲区读取数据==>解码缓冲区数据并使用指定的编码返回字符串。
		buf.toString([encoding, [start, end]]);
		encoding-使用的编码.默认为utf-8.
		strat- 指定开始读取的索引位置，默认为0
		end-结束位置，默认为缓冲区的末尾
	4.将Buffer转换为JSON
		buf.toJSON();==>返回JSON对象
	5.缓冲区合并
		Buffer.concat(list[totalLength])
		list-用于合并的BUFF对象数组列表
		totalLength指定合并后Buffer对象的总长度！
	6.compare比较==>返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
		buf.compare(otherBuffer);
	7.copy==>没有返回值
		buf.copy(targetBuffer(要拷贝的Buffer对象), argetStart(数字， 可选， 初始: 0), sourceStart(数字， 可选， 初始: 0), sourceEnd(数字， 可选， 初始: 0))
	8.slice == > 返回一个新的缓冲区， 跟旧缓冲区指向同一块内存， 但是从start 到 end 的位置剪切。
		buf.slice(start(数字，可选，默认：0), end(数字，可选，默认:buffer.length));
	9.length==>返回Buffer对象所占据的内存长度
		buf.length
##6.stream(流)
	stream四种流类型
		1.Readable - 可读操作。
		2.Writable - 可写操作。
		3.Duplex - 可读可写操作.
		4.Transform - 操作被写入数据，然后读出结果。
	所有stream对象都是EventEmitter的实例
	常用事件
		data-当有数据可读时触发
		end-没有更多的数据可读时触发
		error-在接收和写入过程中发生错误时触发
		finish-所有数据已被写入到底层系统时触发
	1.创建可读流
		fs.createReadStream(file);==>创建可读流
		readerStream.setEncoding('UTF8');==>设置编码
		readerStream.on('data'/'end'/'error',function(){});==>处理流事件
	2.写入流
		fs.createWriteStream(file);==>创建写入流
		writerStream.write(data,'UTF8');==>设置写入数据编码
		writerStream.end();==>标记文件末尾
		readerStream.on('finish'/'data'/'end'/'error',function(){});==>处理流事件
	3.管道流
		.pipe实现大文件像注水一样慢慢复制过程
	4.链式流
		.pipe()
		.pipe()
