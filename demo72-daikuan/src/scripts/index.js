$(function () {
    let timer = setInterval(() => {
        if (active < 3) {
            active++;
            $("#module5 .module-tab li").eq(active).addClass('active').siblings().removeClass('active');
            $("#module5 .module-list >li").eq(active).show().siblings().hide();
            $("#module5 .module-line >li").eq(active).addClass('active').siblings().removeClass('active');
        } else {
            active = 0;
            $("#module5 .module-tab li").eq(active).addClass('active').siblings().removeClass('active');
            $("#module5 .module-list >li").eq(active).show().siblings().hide();
            $("#module5 .module-line >li").eq(active).addClass('active').siblings().removeClass('active');
        }
    }, 5000);
    $("#module5 .module-tab li").on('click', function () {
        clearInterval(timer);
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $("#module5 .module-list >li").eq(index).show().siblings().hide();
        $("#module5 .module-line >li").eq(active).addClass('active').siblings().removeClass('active');
        timer = setInterval(() => {
            if (active < 3) {
                active++;
                $("#module5 .module-tab li").eq(active).addClass('active').siblings().removeClass('active');
                $("#module5 .module-list >li").eq(active).show().siblings().hide();
                $("#module5 .module-line >li").eq(active).addClass('active').siblings().removeClass('active');
            } else {
                active = 0;
                $("#module5 .module-tab li").eq(active).addClass('active').siblings().removeClass('active');
                $("#module5 .module-list >li").eq(active).show().siblings().hide();
                $("#module5 .module-line >li").eq(active).addClass('active').siblings().removeClass('active');
            }
        }, 5000);
    });
    let order = 2;
    setInterval(() => {
        if (order == 2) {
            order = 3;
        } else {
            order = 2;
        }
        $("#module7 .module-list .module-box:eq(0)").css('order', order);
    }, 4000);
})