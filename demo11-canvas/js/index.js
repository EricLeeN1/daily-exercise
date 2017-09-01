window.onload = function () {
    var c = document.getElementById("myCanvas");
    var draw = document.getElementById("draw");
    var cxt = c.getContext("2d");
    draw.onclick = function () {
        init();
    };
    cxt.fillStyle = "blue";
    cxt.fillRect(50, 50, 100, 65);

    cxt.strokeStyle = "red";
    cxt.lineWidth = 6;
    cxt.lineJoin = "miter";
    cxt.strokeRect(100, 150, 100, 65);

    cxt.lineJoin = "round";
    cxt.strokeRect(200, 200, 100, 65);

    cxt.strokeStyle = "#0f0";
    cxt.lineWidth = 7;
    cxt.lineJoin = "bevel";
    cxt.strokeRect(100, 80, 300, 65);

    function init() {
        cxt.fillStyle = "#00f";
        cxt.font = "34px 微软雅黑";
        cxt.fillText("大家好", 100, 150);

        cxt.strokeStyle = "red";
        cxt.strokeText("大家好", 100, 200);
    }
};