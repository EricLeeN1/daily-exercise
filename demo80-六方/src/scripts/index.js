$(function () {
    $(".banner-tips").fadeIn(1000);
    let mySwiper = new Swiper('.swiper-container', {
        speed: 2500,
        autoplay: true,
        loop:true,
        on: {
            init: function () {
                // swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            }
        }
    });
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
        $("#module7 .module-list .module-box:eq(0)").css('order', order);
    }, 4000);
})