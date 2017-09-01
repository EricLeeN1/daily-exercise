// function WebSocketTest()
// {
//    if ("WebSocket" in window)
//    {
//       alert("您的浏览器支持 WebSocket!");

//       // 打开一个 web socket
//       var ws = new WebSocket("ws://127.0.0.1:8080/demo10-websocket/");

//       ws.onopen = function()
//       {
//          // Web Socket 已连接上，使用 send() 方法发送数据
//          ws.send("发送数据");
//          console.log('1111');
//          alert("数据发送中...");
//       };

//       ws.onmessage = function (evt) 
//       { 
//          var received_msg = evt.data;
//          alert("数据已接收...");
//          console.log(received_msg);
//       };

//       ws.onclose = function()
//       { 
//          // 关闭 websocket
//          alert("连接已关闭..."); 
//       };
//    }

//    else
//    {
//       // 浏览器不支持 WebSocket
//       alert("您的浏览器不支持 WebSocket!");
//    }
// }
window.onload = function () {
    var nick = prompt('输入你的昵称');
    var input = document.getElementById('input');
    var btn = document.getElementById('btn');
    input.focus();

    var socket = new WebSocket("ws://" + location.host + "/");
    console.log(socket);
    socket.onmessage = function (event) {
        var msg = event.data;
        var node = document.createTextNode(msg);
        var div = document.createElement('div');
        div.appendChild(node);
        document.body.insertBefore(div, input);
        input.scrollIntoView();
    }
    // input.onblur = function () {
    //     var msg = nick + ":" + input.value;
    //     console.log(msg, input.value);
    //     socket.send(msg);
    //     input.value = "";
    // }
    btn.onclick = function () {
        var msg = nick + ":" + input.value;
        console.log('msg:' + msg, 'value:' + input.value);
        socket.send(msg);
        input.value = "";
    }
}