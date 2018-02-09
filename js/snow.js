var minSize = 5;
var maxSize = 50;
var newOn = 200;//单位是毫秒
var flakeColor = "#fff";

var flake = $("<div></div>").css({"position": "absolute", "top": "-50px"}).html("❅").addClass("snow");
// var flake = $("<div class='snow'></div>").css({"position": "absolute", "top": "-50px",}).html("<img src='./img/2.png' style='width: 200px'>");
//此处换一张钞票即可
$(function () {
    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    setInterval(function () {
        var startPositionLeft = Math.random() * documentWidth;
        var startOpacity = 0.5 + Math.random() * 0.5;
        var endPositionTop = documentHeight;
        var endPositionLeft = Math.random() * documentWidth;
        var durationFall = 2000 + Math.random() * 3000;
        var sizeFlake = minSize + Math.random() * maxSize;
        flake.clone().appendTo("body").css({
            "left": startPositionLeft,
            "opacity": startOpacity,
            "font-size": sizeFlake,
            "color": flakeColor,
        }).animate({
            "top": endPositionTop,
            "left": endPositionLeft,
            "opacity": 0.5
        }, durationFall, function () {
            $(this).remove();
        });
    }, newOn);
});
