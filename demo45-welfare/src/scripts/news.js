$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        getInfos() {
            let that = this;
            that.getAjax('/new', {
            }, function (res) { 
                console.log(res);
                if (res.status == 200) {
                    $("#about-body>main").html(res.data);
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
        init() {
            console.log('111');
            let that = this;
            that.getInfos();
        }
    }
    Base.init();
});