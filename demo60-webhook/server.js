var http = require('http');

var createHandler = require('gitlab-webhook-handler');
var handler = createHandler({
    path: '/',
    secret: 'smxxy'
});

// 上面的 secret 保持和 GitHub 后台设置的一致

function run_cmd(cmd, args, callback) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) {
        resp += buffer.toString();
    });
    child.stdout.on('end', function () {
        callback(resp)
    });
}

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404
        res.end('没有这个位置')
    })
}).listen(7777);

console.log("Gitlab Hook Server running at http://127.0.0.1:7777/webhook");

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    run_cmd('sh', ['./deploy.sh', event.payload.repository.name], function (text) {
        console.log(text);
    });
})

handler.on('issues', function (event) {
    console.log('Received an issue event for %s action=%s: #%d %s',
  event.payload.repository.name,
  event.payload.action,
  event.payload.issue.number,
  event.payload.issue.title)
})