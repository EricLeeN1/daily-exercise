$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        //            direction:"vertical",
        direction: "horizontal",
        initialSlide: 0,
        speed: 2000,
        autoplay: true,
        loop: true,
        //            分页器
        pagination: {
            el: ".swiper-pagination"
        },
        //            前进后退按钮
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        //            如果需要滚动条
        scrollbar: {
            el: ".swiper-scrollbar"
        }
    });
    $("#module5 .module-tab li").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $("#module5 .module-list >li").eq(index).show().siblings().hide();
        $("#module5 .module-line >li").eq(index).show().siblings().hide();
    });
})