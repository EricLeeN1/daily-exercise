var express = require('express');
var router = express.Router();


//该路由使用的中间件
router.use(function (req, res, next) {
    console.log('time:' + Date.now());
    next();
});

// 定义网站主页的路由
router.get('/', function (req, res) {
    res.send('鸟的主页');
});

router.get('/about', function (req, res) {
    res.send('关于鸟');
});

module.exports = router;