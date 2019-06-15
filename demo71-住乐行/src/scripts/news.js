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
    $("#news-lists .news-components .news-title").on('click',function(){
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('img').attr('src',"./images/add.png");
            $(this).next().hide();
        } else {
            $(this).addClass('active');
            $(this).children('img').attr('src',"./images/discount.png");
            $(this).next().show();
        }
    });
});