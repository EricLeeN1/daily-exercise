var express = require('express');
var app = express();

//没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
    console.log('time:' + new Date());
    next();
});
// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/user/:id', function (req, res, next) {
    console.log('请求类型:', req.method);
    next();
});
// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
    res.send('user');
});
// 在一个挂载点装载一组中间件。一个中间件栈，对任何指向 /blog/:id 的 HTTP 请求打印出相关信息
app.use('/blog/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    // next();
});
// 如果需要在中间件栈中跳过剩余中间件，调用 next('route') 方法将控制权交给下一个路由。 注意： next('route') 只对使用 app.VERB() 或 router.VERB() 加载的中间件有效。
// 一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/users/:id', function (req, res, next) {
    // 如果 user id 为 0, 跳到下一个路由
    if (req.params.id == 0) next('route');
    // 否则将控制权交给栈中下一个中间件
    else next(); //
}, function (req, res, next) {
    // 渲染常规页面
    res.send('regular');
});

// 处理 /user/:id， 渲染一个特殊页面id=0请求这个
app.get('/users/:id', function (req, res, next) {
    res.send('special');
});

app.listen(3000);