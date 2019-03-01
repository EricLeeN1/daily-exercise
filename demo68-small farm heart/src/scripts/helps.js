$(function () {
    let show = true;
    $(".help-classsify-title").on('click', function () {
        if ($(this).siblings('.help-classsify-list').hasClass('active')) {
            show = !show;
            console.log(show);
            if (show) {
                $(this).siblings('.help-classsify-list').show();
                $(this).children('img').attr('src', "./images/shang@2x.png");
            } else {
                $(this).siblings('.help-classsify-list').hide();
                $(this).children('img').attr('src', "./images/xia@2x.png");
            }
        } else {
            show = true;
            $(this).siblings('.help-classsify-list').addClass('active').show();
            $(this).children('img').attr('src', "./images/shang@2x.png");
            $(this).parent().siblings().children('.help-classsify-list').removeClass('active').hide();;
            $(this).parent().siblings().children('.help-classsify-title').children('img').attr('src', "./images/xia@2x.png");;
            // $(this).parent().siblings().children('help-classsify-list').removeClass('active');
            // $(this).parent().siblings().children('help-classsify-list').hide();
        }

    });
});