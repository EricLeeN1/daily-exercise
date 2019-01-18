$(function () {
    //构建老虎机
    // var a ={
    //    active:设置第几个元素，
    //    delay：设置旋转动画时间，
    //    auto:传递一个毫秒作为参数，设置机器自动旋转。默认false,
    //    spins:如果机器自动旋转，设置旋转数
    //    stopHidden:如果元素在屏幕上方或下方请停止动画。默认true,
    //    randomize:传递函数以选择您自己的随机元素。此函数必须返回0（第一个元素）和最大元素数之间的整数。
    //    direction:方向up /down
    //}
    //动态改变人数；

    let signinfo, fullPeople;
    fullPeople = null;
    signinfo = null;
    //获得奖项信息，然后设置奖项数
    //一开始把人加上去；
    $("#user-icon").empty();
    var html = '';
    for (var i = 1; i <= 45; i++) {
        html += `<div><img src="images/user/head_${i}.png" alt="" title=''  data-id='${i}'></div>`;
    }
    fullPeople = html;
    // console.log(fullPeople);
    for (var j = 0; j < 10; j++) {
        $("#user-icon").append($("<li class='randomizeMachine'></li>").html(fullPeople));
    }
    //签到信息
    $("#select-number").change(function () {
        //不管得没得奖每次都重新加载一遍
        $(this).addClass("changed");
        $("#winner-info").empty();
        //清空中奖信息
        var rest = $(this).val();
        var html = '';
        $("#user-icon li").remove();
        // console.log(fullPeople);
        for (var i = 1; i <= rest; i++) {
            $("#user-icon").append($("<li class='randomizeMachine'></li>").html(fullPeople));
        }
        var showWidth = $("#winner-show").width();
        var showHeight = $("#winner-show").height();
        var liWidth = $("#user-icon").children("li").width() - 0 + 2;
        var liHeight = $("#user-icon").children("li").height() - 0 + 6;
        if (rest <= 5) {
            $("#user-icon").css({
                "paddingLeft": (showWidth - liWidth * rest) / 2,
                "paddingTop": (showHeight - liHeight) / 2
            });
        } else {
            $("#user-icon").css({
                "paddingLeft": 0,
                "paddingTop": 0
            });
        }
    });
    $("#ranomizeButton").on('click', function () {
        award();
    });

    function award() {
        var rest = $("#select-number").val();
        var awardinfo = null;
        $("#user-icon li").remove();
        for (var i = 1; i <= rest; i++) {
            $("#user-icon").append($("<li class='randomizeMachine'></li>").html(fullPeople));
        }
        $(this).off('click');
        $("#select-number").attr("disabled", true);
        $("#ranomizeButton").prev().removeClass("begin-tool").addClass("begin-to-play");

        function getIndex(index) {
            var sy = -1;
            if (index < 45) {
                for (var j = 1; j <= $("#user-icon li:eq(" + index + ")>div>div").length; j++) { //通过id匹配获奖信息第index个人的uid是否和数组第j个一样
                    // console.log($("#user-icon li:eq(" + index + ")>div>div").length);
                    // console.log(j);
                    if (index == $("#user-icon li:eq(" + index + ")>div>div").eq(j).children("img").attr("data-id")) {
                        // console.log($("#user-icon li:eq(" + index + ")>div>div").eq(j).children("img").attr("data-id"));
                        // console.log(index);
                        sy = index;
                        return sy;
                    }
                }
            } else if (sy == -1) {
                //设置默认
                $("#user-icon li:eq(" + index + ")>div>div").empty().html("<img src='img/main/userFavicon/head_19.png' alt='' title='默认头像'/>");
            }
        }

        var machine1 = $('#user-icon li:eq(0)').slotMachine({
            active: 0,
            delay: 300,
            randomize: function (activeElementIndex) {
                return getIndex(0);
            }
        });
        var machine2 = $("#user-icon li:eq(1)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(1);
            }
        });
        var machine3 = $("#user-icon li:eq(2)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(2);
            }
        });
        var machine4 = $("#user-icon li:eq(3)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(3);
            }
        });
        var machine5 = $("#user-icon li:eq(4)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(4);
            }
        });
        var machine6 = $("#user-icon li:eq(5)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(5);
            }
        });
        var machine7 = $("#user-icon li:eq(6)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(6);
            }
        });
        var machine8 = $("#user-icon li:eq(7)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(7);
            }
        });
        var machine9 = $("#user-icon li:eq(8)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(8);
            }
        });
        var machine10 = $("#user-icon li:eq(9)").slotMachine({
            active: 0,
            delay: 300,
            direction: 'down',
            randomize: function (activeElementIndex) {
                return getIndex(9);
            }
        });
        machine1.shuffle(($("#select-number").find("option:selected").text() - 0) * 5, function () {
            $("#winner-info").prev().text("中奖名单");
            // console.log("第1个结束");
            $("#ranomizeButton").prev().removeClass("begin-to-play").addClass("begin-tool");
            $("#select-number").removeAttr("disabled");
            $("#winner-info").prev().text($("#select-prize").val() + '等奖');
            for (var i = 1; i <= $("#select-number").val(); i++) {
                var img = $("<img>").attr({
                    "src": `./images/user/head_${i}.png`,
                    "title": `中奖用户${i}`
                });
                var span = $('<span></span>').text(`中奖用户${i}`);
                var liItems = $("<li></li>").append(img, span);
                $("#winner-info").append(liItems);
            }
        });
        setTimeout(function () {
            machine2.shuffle(($("#select-number").find("option:selected").text() - 0) * 5);
            // console.log("第2个结束");
        }, 300);
        setTimeout(function () {
            machine3.shuffle(($("#select-number").find("option:selected").text() - 0) * 5);
            // console.log("第3个结束");
        }, 600);
        setTimeout(function () {
            machine4.shuffle(($("#select-number").find("option:selected").text() - 0) * 4);
            // console.log("第4个结束");
        }, 900);
        setTimeout(function () {
            machine5.shuffle(($("#select-number").find("option:selected").text() - 0) * 4, function () {});
            // console.log("第5个结束");
        }, 1200);
        setTimeout(function () {
            machine6.shuffle(($("#select-number").find("option:selected").text() - 0) * 3, function () {});
            // console.log("第6个结束");
        }, 1500);
        setTimeout(function () {
            machine7.shuffle(($("#select-number").find("option:selected").text() - 0) * 3, function () {});
            // console.log("第7个结束");
        }, 1800);
        setTimeout(function () {
            machine8.shuffle(($("#select-number").find("option:selected").text() - 0) * 2, function () {});
            // console.log("第8个结束");
        }, 2100);
        setTimeout(function () {
            machine9.shuffle(($("#select-number").find("option:selected").text() - 0) * 2, function () {});
            // console.log("第9个结束");
        }, 2400);
        setTimeout(function () {
            machine10.shuffle(($("#select-number").find("option:selected").text() - 0) * 1, function () {
                // console.log("第10个结束");
            });
        }, 2700);
    }
});