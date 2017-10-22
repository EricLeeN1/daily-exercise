$(function () {
    jQuery.support.cors = true;
    var Base = window.Base || {};
    Base = {
        default: '',
        shareData: {
            title: '',
            subTitle: ''
        },
        getPdf: function () {
            $.ajax({
                url: '出师表.pdf',
                data: {},
                success: function (res) {
                    console.log('success');
                },
                dataType: 'text'
            });
        },
        init: function () {
            var that = this;
            console.log('init');
            that.getPdf();
            $('a#preview').media({width: 750, height: 600});
        }
    };
    Base.init();
});