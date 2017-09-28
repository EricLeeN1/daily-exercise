var express = require('express');

var app = express();//主app
var admin = express();//子app

admin.get('/', function (req, res) {
    console.log(admin.mountpath);// /admin
    res.send('Admin Homepage');
});
app.use('/admin', admin);
app.listen(3000);