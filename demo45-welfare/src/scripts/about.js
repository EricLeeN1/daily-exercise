$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        getBannerInfos() {
            let that = this;
            that.getAjax('/introduction', {
            }, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $("#about-body>main .to-accompany .text").html(res.data.accompany);
                    $("#about-body>main .about-brothers .text").html(res.data.hb);
                    $("#about-body>main .about-cnr .text").html(res.data.cnr);
                } else {
                    alert(res.message);
                }
            });
        },
        getAjax(url, datas, fns, fnf) {
            $.ajax({
                type: "GET",
                url: this.site + url,
                data: datas,
                dataType: 'JSON',
                success: fns,
                fail: fnf
            });
        },
        postAjax(url, datas, fns, fnf) {
            $.ajax({
                type: "POST",
                url: this.site + url,
                data: datas,
                dataType: 'json',
                success: fns,
                fail: fnf
            });
        },
        setSeo() {
            let that = this;
            that.getAjax('/seo', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $("title").text(res.data.title);
                    $("meta[name='keywords']").attr('content', res.data['keywords']);
                    $("meta[name='description']").attr('content', res.data['description']);
                } else {
                    alert(res.message);
                }
            })

        },
        init() {
            console.log('111');
            let that = this;
            that.setSeo();           
            that.getBannerInfos();
        }
    }
    Base.init();
});