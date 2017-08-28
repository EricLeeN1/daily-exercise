##1. JSON 是什么

	1. JSON，全称是 JavaScript Object Notation，即 JavaScript 对象标记法。
	2. JSON 是一种轻量级（Light-Weight）、基于文本的（Text-Based）、可读的（Human-Readable）格式。
	3. JSON 的名称中虽然带有 JavaScript，但这是指其语法规则是参考 JavaScript 对象的，而不是指只能用于 JavaScript 语言。
	4. JSON 无论对于人，还是对于机器来说，都是十分便于阅读和书写的，而且相比 XML （另一种常见的数据交换格式），文件更小，因此迅速成为网络上十分流行的交换格式。
	5. 近年来 JavaScript 已经成为浏览器上事实上的标准语言，JavaScript 的风靡，与 JSON 的流行也有密切的关系。
	6. 因为 JSON 本身就是参考 JavaScript 对象的规则定义的，其语法与 JavaScript 定义对象的语法几乎完全相同。
	7. JSON 格式的创始人声称此格式永远不升级，这就表示这种格式具有长时间的稳定性，10 年前写的文件，10 年后也能用，没有任何兼容性问题。

##	2. JSON 的语法规则是怎样的

	JSON 的语法规则十分简单，可称得上“优雅完美”，总结起来有：
		-  数组（Array）用方括号(“[]”)表示。
		-  对象（Object）用大括号（”{}”）表示。
		-  名称/值对（name/value）组合成数组和对象。
		-  名称（name）置于双引号中，值（value）有字符串、数值、布尔值、null、对象和数组。
		-  并列的数据之间用逗号（“,”）分隔
		{
			"name": "Geoff Lui",
			"age": 26
		}

##	3. JSON 和 XML
	
	JSON 常被拿来与 XML 做比较，因为 JSON 的诞生本来就多多少少要有取代 XML 的意思。相比 XML，JSON 的优势如下：
		-  没有结束标签，长度更短，读写更快
		-  能够直接被 JavaScript 解释器解析
		-  可以使用数组
**JSON：**
	
	{
		"name": "Geoff Lui",
		"age": 26,
		"friends": ["Lily", "Lucy", "Gwen"]
	}

**XML：**

	<root>
		<name>Geoff Lui</name>
		<age>26</age>
		<friends>Lily</friends>
		<friends>Lucy</friends>
		<friends>Gwen</friends>
	</root>


## 4. JSON 解析和生成

	在 JavaScript 中，有两个方法与此相关： JSON.parse 和 JSON.stringify 。
	序列化，指将 JavaScript 值转化为 JSON 字符串的过程。
	JSON.stringify() 能够将 JavaScript 值转换成 JSON 字符串。
	JSON.stringify() 生成的字符串可以用 JSON.parse() 再还原成 JavaScript 值。
	json对象转JSON字符串.stringify(jsonobj)
	JSON.stringify(value[, replacer[, space]])
	value：必选参数。被变换的 JavaScript 值，一般是对象或数组。
	replacer：可以省略。有两种选择：函数或数组。
	  - 如果是函数，则每一组名称/值对都会调用此函数，该函数返回一个值，作为名称的值变换到结果字符串中，如果返回 undefined，则该成员被忽略。
	  - 如果是数组，则只有数组中存在名称才能够被转换，且转换后顺序与数组中的值保持一致。
	space：可以省略。这是为了排版、方便阅读而存在的。可以在 JSON 字符串中添加空白或制表符等。
	2. value 用法
	3. replacer 的用法
	4. space 的用法
	json字符串转对象JSON.parse(jsonstr)
		两个参数
		1. 要转的json字符串
		2. function函数
		`function fun(name,value) {
    		console.log(name+":"+value);
    		if (name=="age") {
        		value = 14;
			}
			return value;
		}`

2017/8/26 14:39:11 

## 5. JSON和XML的转换
	
	1. 下载相关文件
		- JQuery
		- jquery.json2xml.js
		- jquery.xml2json.js
	2. XML 字符串转换成 JSON 对象
		$.xml2json(str);
	3. JSON 对象转换成 XML 字符串
		$.json2xml(obj);

## 6.JSON和Ajax
	
	JSON 文件被放置在服务器端，客户端请求该文件用得最多的是 Ajax，能够实现异步请求。
	1. Ajax 是什么
		AJAX，全称 Asynchronous JavaScript and XML，即“异步的 JavaScript 和 XML”，一般写作 Ajax。
		Ajax 能够与服务器交换少量数据，从而异步地更新部分网页。
		异步,指的是当 Ajax 执行交换数据的操作时，其他的操作仍然可以执行。
		一个最常见的应用是：打开百度或谷歌首页，当输入文字后，搜索栏下方会显示出几个建议的搜索词。这正是 	Ajax 的应用。
	2. 创建和使用 Ajax
		创建 Ajax 对象要考虑浏览器的版本问题，主要分为两大类：IE7+/Chrome/Firefox/… 和 IE6/IE5.。
		`function CreateXHR(){
    		if (window.XMLHttpRequest)
    		{
        		//对浏览器 IE7+, Firefox, Chrome, Opera, Safari
        		return new XMLHttpRequest();
    		}
    		else {
	        //对浏览器 IE6, IE5
        	return new ActiveXObject("Microsoft.XMLHTTP");
    		}
		}`
	然后，只要用如下方式创建即可。
	var xmlhttp; 
	xmlhttp = CreateXHR();
	服务器端有一个文件 test.json，请求并输出。
	xmlhttp.open("GET","test.json",true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function(){
  	  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var jsonstr = xmlhttp.responseText;
       	console.log(jsonstr);
   		}
	}
	其中，xmlhttp.readyState 存有 XMLHttpRequest 的状态，有五个值：
	0: 请求未初始化
	1: 服务器连接已建立
	2: 请求已接收
	3: 请求处理中
	4: 请求已完成，且响应已就绪
	xmlhttp.status 的值为请求结果，200 表示“OK”，404 表示未找到页面。
	获取来自服务器的响应，可使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性，前者是以字符串形式，后者是以 XML 形式。

## 7.GeoJSON和TopoJSON
	GeoJSON 和 TopoJSON 是符合 JSON 语法规则的两种数据格式，用于表示地理信息。

	1. GeoJSON

	GeoJSON 是用于描述地理空间信息的数据格式。GeoJSON 不是一种新的格式，其语法规范是符合 JSON 格式的，只不过对其名称进行了规范，专门用于表示地理信息。

	GeoJSON 的最外层是一个单独的对象（object）。这个对象可表示：

	- 几何体（Geometry）。
	- 特征（Feature）。
	- 特征集合（FeatureCollection）。

	最外层的 GeoJSON 里可能包含有很多子对象，每一个 GeoJSON 对象都有一个 type 属性，表示对象的类型，type 的值必须是下面之一。

	- Point：点。
	- MultiPoint：多点。
	- LineString：线。
	- MultiLineString：多线。
	- Polygon：面。
	- MultiPolygon：多面。
	- GeometryCollection：几何体集合。
	- Feature：特征。
	- FeatureCollection：特征集合。

	下面举几个例子。

	点对象：

	`{
	"type": "Point",
	"coordinates": [ -105, 39 ]
	}`

	线对象：

	{
	"type": "LineString",
	"coordinates": [[-105, 39 ], [-107, 38 ]]
	}

	面对象：

	{
	"type": "Polygon",
	"coordinates":[[ [30, 0], [31, 0], [31, 5], [30, 5], [30, 0] ]]
	}


	由以上格式可以发现，每一个对象都有一个成员变量 coordinates。如果 type 的值为 Point、MultiPoint、LineString、MultiLineString、Polygon、MultiPolygon 之一，则该对象必须有变量 coordinates。

	如果 type 的值为 GeometryCollection（几何体集合），那么该对象必须有变量 geometries，其值是一个数组，数组的每一项都是一个 GeoJSON 的几何对象。例如：


	{
   	 "type": "GeometryCollection",
   	 "geometries": [
      	  {
      	      "type": "Point",
        		"coordinates": [100, 40]
    	    },
        	{
            "type": "LineString",
            "coordinates": [ [100, 30], [100, 35] ]
        	}
   	 ]
	}

	如果 type 的值为 Feature（特征），那么此特征对象必须包含有变量 geometry，表示几何体，geometry 的值必须是几何体对象。此特征对象还包含有一个 properties，表示特性，properties 的值可以是任意 JSON 对象或 null。例如：


	{
    	"type": "Feature",
    	"properties": {
      	  "name": "北京"
   	 },
   	 "geometry": {
      	  "type": "Point",
   	     "coordinates": [ 116.3671875, 39.977120098439634]
   	 }
	}

	如果 type 的值为 FeatureCollection（特征集合），则该对象必须有一个名称为 features 的成员。features 的值是一个数组，数组的每一项都是一个特征对象。




	2. TopoJSON

	TopoJSON 是 GeoJSON 按拓扑学编码后的扩展形式，是由 D3 的作者 Mike Bostock 制定的。相比 GeoJSON 直接使用 Polygon、Point 之类的几何体来表示图形的方法，TopoJSON 中的每一个几何体都是通过将共享边（被称为arcs）整合后组成的。

	TopoJSON 消除了冗余，文件大小缩小了 80%，因为：

	边界线只记录一次（例如广西和广东的交界线只记录一次）。
	地理坐标使用整数，不使用浮点数。

	3. 在线工具
	在线生成 GeoJSON：http://geojson.io/
	简化、转换 GeoJSON 和 TopoJSON：http://mapshaper.org/