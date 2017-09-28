/**
 * Created by Eric on 2017/9/28.
 */
var express = require('express');

var app = express();
app.use(function (req, res, next) {
    console.log('Times:%d', Date.now());
    next();
});
app.use('/admin', function (req, res, next) {
    // 请求   http://127.0.0.1:3000/admin/get
    console.log(req.originalUrl);//  /admin/get
    console.log(req.baseUrl);//     /admin
    console.log(req.path);//    /get
});
app.listen(3000);