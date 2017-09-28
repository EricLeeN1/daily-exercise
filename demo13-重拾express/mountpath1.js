var express = require('express');

var app = express();
var admin = express();
var secret = express();

admin.get('/', function (req, res) {
    console.log(admin.mountpath);// [ '/amn*n', '/manager' ]
    res.send('admin Homepage');
});


secret.get('/', function (req, res) {
    console.log(secret.mountpath); // /secr*t
    res.send('Admin Secret');
});

admin.use('/secr*t', secret);//要实现这条必须在/secr*t这个路径之前加子app的/manager或者/adm*n路径
app.use(['/adm*n', '/manager'], admin);//访问这两个任意一个路径都是[ '/adm*n', '/manager' ]，通过父app


app.listen(3000);