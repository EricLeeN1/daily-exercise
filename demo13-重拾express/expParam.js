var express = require('express');
var app = express();
app.param('id', function (req, res, next, id) {
    console.log('仅仅一次');
    next();
});
app.get('/user/:id', function (req, res, next) {
    console.log('匹配通过');
    next();
});

app.get('/user/:id', function (req, res) {
    console.log('也通过了');
    res.end();
});

app.listen(3000);