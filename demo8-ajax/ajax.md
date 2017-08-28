
## 1.什么是 AJAX ？

	AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
	AJAX 是一种用于创建快速动态网页的技术。
	通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
	传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

## 2.AJAX请求
	
	1）、Http 请求
	XMLHttpRequest
	2）、XMLHttpRequest 对象
	request = new XMLHttpRequest()=>firfox,opera,safari
	xmlhttp = new ActiveXObject('Msxml2.XMLHTTP')=>IE6+
	xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
	2.1、创建XMLHttpRequest 对象
	2.2、请求服务器
	2.2.0、onreadystatechange
		request.onreadystatechange = function() {
		//这里要写一些代码
			if (request.readyState == 4) {
			//从服务器获取数据的代码，并做相应处理
			alert(request.responseText);
			}
		}
	2.2.1、readyState 属性
	0
	1 
	2
	3 
	4 
	2.2.2、responseText 属性
	2.2.3、 open()
		GET/POST
		URL
		异步处理标志
	2.2.4、send()
		request.open("GET", "test.txt", true);
		request.onreadystatechange = function() {
			//这里要写一些代码
			if (request.readyState == 4) {
			//从服务器获取数据的代码，并做相应处理
			alert(request.responseText);
			}
		}
	request.send(null)
	2.3、处理响应