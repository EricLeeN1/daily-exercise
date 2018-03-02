const http = require('http');
const request = require('request');

const urlSites = {
    hostname: '127.0.0.1',
    port: 8010,
    imgPort: 8011
};

// 创建一个API代理服务

const apiServer = http.createServer((req, res) => {
    const url = 'http://news-at.zhihu.com/api/4' + req.url;
    const options = {
        url: url
    };

    function callback(error, response, body) {
        if (!error && response.statusCode === 200) {
            // 设置编码类型，否则中文会显示为乱码
            res.setHeader("Content-Type", "text/plain;charset=UTF-8");
            // 设置所有域允许跨域
            res.setHeader("Access-Control-Allow-Origin", "*");
            // 返回代理后的内容
            console.log(body);
            res.end(body);
        }
    }
    request.get(options,callback);
});

apiServer.listen(urlSites.port,urlSites.hostname,()=>{
    console.log(`接口代理运行在http://${urlSites.hostname}:${urlSites.port}`);
});

// 创建一个图片代理服务
const imgServer = http.createServer((req, res) => {
    const url = req.url.split('/img/')[1];
    const options = {
        url: url,
        encoding: null
    };

    function callback (error, response, body) {
        if (!error && response.statusCode === 200) {
            const contentType = response.headers['content-type'];
            res.setHeader('Content-Type', contentType);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(body);
        }
    }
    request.get(options, callback);
});
// 监听 8011 端口
imgServer.listen(urlSites.imgPort,urlSites.hostname,()=>{
    console.log(`接口代理运行在http://${urlSites.hostname}:${urlSites.imgPort}`);
});