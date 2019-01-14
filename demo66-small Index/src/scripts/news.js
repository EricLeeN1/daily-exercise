$(function () {
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