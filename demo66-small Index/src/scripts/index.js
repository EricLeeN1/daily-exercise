$(function () {
    // var mySwiper = new Swiper('.swiper-container', {
    //     //            direction:"vertical",
    //     direction: "horizontal",
    //     initialSlide: 0,
    //     speed: 2000,
    //     autoplay: true,
    //     loop: true,
    //     //            分页器
    //     pagination: {
    //         el: ".swiper-pagination"
    //     },
    //     //            前进后退按钮
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     //            如果需要滚动条
    //     scrollbar: {
    //         el: ".swiper-scrollbar"
    //     }
    // });
    // setTimeout(() => {
    //     $("#module1 .module-item:eq(0)").animate({
    //         'marginLeft': '0'
    //     },'fast','linear');
    // }, 600);
    // setTimeout(() => {
    //     $("#module1 .module-item:eq(1)").animate({
    //         'marginRight': '0'
    //     },'fast','linear');
    // }, 1200);
    // setTimeout(() => {
    //     $("#module1 .module-item:eq(2)").animate({
    //         'marginLeft': '0'
    //     },'fast','linear');
    // }, 1800);
    // setTimeout(() => {
    //     $("#module1 .module-item:eq(3)").animate({
    //         'marginRight': '0'
    //     },'fast','linear');
    // }, 2000);
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
    let active = 0;
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
        $("#module7 .module-list .module-box:eq(1)").css('order', order);
    }, 4000);
})