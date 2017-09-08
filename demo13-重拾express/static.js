// 利用express托管静态文件

var express = require('express');
var app = express();


app.use(express.static('public'));
// 将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。
// http://127.0.0.1:3000/images/ad.png


// 挂载路径
// app.use('/static',express.static('public'));//
// 如果你希望所有通过 express.static访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，
// 可以通过为静态资源目录指定一个挂载路径的方式来实现，
//http://127.0.0.1:3000/static/images/ad.png
app.listen(3000);