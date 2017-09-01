window.onload = function () {
    var c = document.querySelector('#myCanvas');
    var btn = document.querySelector('#draw');
    var ctx = c.getContext('2d');
    btn.onclick = function () {
        console.log(1);
        init();
    };

    function init() {
        ctx.strokeStyle = "red";
        ctx.font = "bold 50px 宋体";
        ctx.shadowBlur = 1.6;
        ctx.shadowColor = "#000";
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 8;
        ctx.strokeText("艾瑞克你好", 200, 100);

        ctx.fillStyle = "red";
        ctx.shadowBlur = 1.6;
        ctx.shadowColor = "#000";
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 8;
        ctx.fillRect(160, 150, 50, 200);
    }
};