/*砸蛋*/
$(function () {
    $("#eggs-list").show();
    let index = 1;
    $("#eggs-hotarea").on("click", function () {
        $("#hammer").show();
        $(".bg")[0].style.cursor = "wait";
        var round = 0;
        var a = setInterval(function () {
            if (round < 5) {
                round++;
                document.getElementById('eggs').style.backgroundPositionX = '' + -round * 500 + 'px';
            } else {
                clearInterval(a);
                $("#hammer").hide();
                $(".bg")[0].style.cursor = "url('images/hammer.ico'),auto";
                document.getElementById('eggs').style.backgroundPositionX = '0';
            }
        }, 400);
        //每次创建一个img
        let awardshow = $("<img id='award-show'/>").attr("src", `./images/user/head_${index}.png`);
        $(".bg").append(awardshow);
        $("#award-show").animate({
            top: '140px',
            zIndex: '101',
            width: "160px",
            height: "160px",
            marginLeft: "-80px",
            
        }, 1000, function () {
            $("#award-show").animate({
                opacity: "0",
                width: "80px",
                height: "80px",
                marginLeft: "160px"
            }, 1000, function () {
                $("#award-show").remove();
                $("#egg-winner").prepend(`<li><img src="./images/user/head_${index}.png" alt=""><span>参与用户${index}</span><span>${index}等奖</span></li>`);
                //if ($("#eggs-hotarea").hasClass("clicked") == false) {
                //    $("#eggs-list").fadeIn();
                //};
                // $("#eggs-list").mCustomScrollbar("scrollTo", "top");
                index += 1;
            });
        });
    });
});