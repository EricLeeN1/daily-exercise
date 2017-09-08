var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello Eric');
});
app.get('/user', function (req, res) {
    res.send('Hello,Student of Eric');
});
app.post('/', function (req, res) {
    res.send('得到一个post请求');
});
app.put('/user', function (req, res) {
    res.send('/user得到一个put请求');
});
app.delete('/user', function (req, res) {
    res.send('/user得到一个delete请求');
});
app.listen(3000);