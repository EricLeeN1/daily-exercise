var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27018/express', {useMongoClient: false}, function (err) {
    if (err) {
        console.error('数据库链接失败');
    } else {
        console.log('数据链接成功');
    }
});

module.exports = db;