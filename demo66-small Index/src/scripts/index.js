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
    setTimeout(() => {
        $("#module1 .module-item:eq(0)").css('marginLeft', '0');
    }, 600);
    setTimeout(() => {
        $("#module1 .module-item:eq(1)").css('marginRight', '0');
    }, 1200);
    setTimeout(() => {
        $("#module1 .module-item:eq(2)").css('marginLeft', '0');
    }, 1800);
    setTimeout(() => {
        $("#module1 .module-item:eq(3)").css('marginRight', '0');
    }, 2400);
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
            $("#module5 .module-line >li").eq(active).show().siblings().hide();
        } else {
            active = 0;
            $("#module5 .module-tab li").eq(active).addClass('active').siblings().removeClass('active');
            $("#module5 .module-list >li").eq(active).show().siblings().hide();
            $("#module5 .module-line >li").eq(active).show().siblings().hide();
        }
    }, 5000);
    $("#module5 .module-tab li").on('click', function () {
        clearInterval(timer);
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $("#module5 .module-list >li").eq(index).show().siblings().hide();
        $("#module5 .module-line >li").eq(index).show().siblings().hide();
        timer = setInterval(() => {
            if (active < 3) {
                active++;
                $("#module5 .module-tab li").eq(active).addClass('active').siblings().removeClass('active');
                $("#module5 .module-list >li").eq(active).show().siblings().hide();
                $("#module5 .module-line >li").eq(active).show().siblings().hide();
            } else {
                active = 0;
                $("#module5 .module-tab li").eq(active).addClass('active').siblings().removeClass('active');
                $("#module5 .module-list >li").eq(active).show().siblings().hide();
                $("#module5 .module-line >li").eq(active).show().siblings().hide();
            }
        }, 5000);
    });
})