var express = require('express');
var app = express();


app.route('/book')
    .get(function (req, res) {
        res.send('得到随机一本书');
    })
    .post(function (req, res) {
        res.send('添加一本书');
    })
    .put(function (req, res) {
        res.send('更新一本书');
    });

app.listen(3000);