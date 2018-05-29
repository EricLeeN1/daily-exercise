$(function () {
    jQuery.support.cors = true;
    let Base = window.Base || {};
    Base = {
        site: 'https://www.doubaner.top',
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
        versions: function () {
            var e = navigator.userAgent, t = e.toLowerCase();
            navigator.appVersion;
            return {
                wechat: "micromessenger" == t.match(/MicroMessenger/i),
                qq: "qq" == t.match(/QQ/i),
                weibo: "weibo" == t.match(/WeiBo/i),
                trident: e.indexOf("Trident") > -1,
                presto: e.indexOf("Presto") > -1,
                webKit: e.indexOf("AppleWebKit") > -1,
                gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
                mobile: !!e.match(/AppleWebKit.*Mobile.*/),
                ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                iPhone: e.indexOf("iPhone") > -1,
                iPad: e.indexOf("iPad") > -1,
                webApp: -1 == e.indexOf("Safari")
            }
        }(),
        fontSize: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, t = e.document,
                i = t.documentElement, n = "orientationchange" in e ? "orientationchange" : "resize",
                o = function () {
                    var e = i.clientWidth || 375;
                    e > 750 && (e = 750), i.style.fontSize = e / 7.5 + "px"
                };
            window.getComputedStyle(i, null).getPropertyValue("font-size") <= "20px" && o(), t.addEventListener && (e.addEventListener(n, o, !1), t.addEventListener("DOMContentLoaded", o, !1))
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
        showNav() {
            $(".common-header ol").toggle();
            $("body").toggleClass('header-active');
        },
        getBannerInfos() {
            let that = this;
            that.getAjax('/introduction', {
            }, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $("#about-body>main .about-us .text").html(res.data.accompany);
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
        init() {
            console.log('111');
            let that = this;
            that.fontSize();
            that.setSeo();
            $(".common-header ul").on('click', function () {
                that.showNav();
            });
            that.getBannerInfos();
        }
    };
    Base.init();
});