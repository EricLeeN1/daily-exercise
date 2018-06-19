"use strict";
$(function () {
    jQuery.support.cors = !0;
    var e, t;
    window.Base;
    ({
        site: "https://www.doubaner.top",
        slides: null,
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
        versions: (e = navigator.userAgent, t = e.toLowerCase(), navigator.appVersion, {
            wechat: "micromessenger" == t.match(/MicroMessenger/i),
            qq: "qq" == t.match(/QQ/i),
            weibo: "weibo" == t.match(/WeiBo/i),
            trident: -1 < e.indexOf("Trident"),
            presto: -1 < e.indexOf("Presto"),
            webKit: -1 < e.indexOf("AppleWebKit"),
            gecko: -1 < e.indexOf("Gecko") && -1 == e.indexOf("KHTML"),
            mobile: !!e.match(/AppleWebKit.*Mobile.*/),
            ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: -1 < e.indexOf("Android") || -1 < e.indexOf("Linux"),
            iPhone: -1 < e.indexOf("iPhone"),
            iPad: -1 < e.indexOf("iPad"),
            webApp: -1 == e.indexOf("Safari")
        }),
        fontSize: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window,
                t = e.document,
                n = t.documentElement,
                o = "orientationchange" in e ? "orientationchange" : "resize",
                a = function () {
                    var e = n.clientWidth || 375;
                    750 < e && (e = 750), n.style.fontSize = e / 7.5 + "px"
                };
            window.getComputedStyle(n, null).getPropertyValue("font-size") <= "20px" && a(), t.addEventListener && (e.addEventListener(o, a, !1), t.addEventListener("DOMContentLoaded", a, !1))
        },
        setSeo: function () {
            this.getAjax("/seo", {}, function (e) {
                console.log(e), 200 == e.status ? ($("title").text(e.data.title), $("meta[name='keywords']").attr("content", e.data.keywords), $("meta[name='description']").attr("content", e.data.description)) : alert(e.message)
            })
        },
        showNav: function () {
            $(".common-header ol").toggle(), $("body").toggleClass("header-active")
        },
        
        getAjax: function (e, t, n, o) {
            $.ajax({
                type: "GET",
                url: this.site + e,
                data: t,
                dataType: "JSON",
                success: n,
                fail: o
            })
        },
        postAjax: function (e, t, n, o) {
            $.ajax({
                type: "POST",
                url: this.site + e,
                data: t,
                dataType: "json",
                success: n,
                fail: o
            })
        },
        getQueryString: function (t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                n = window.location.search.substr(1).match(e),
                s = "";
            return null != n && (s = n[2]), (n = e = null) == s || "" == s || "undefined" == s ? "" : s
        },
        init: function () {
            console.log("111");
            var e = this;
            e.fontSize(), e.setSeo(), $(".common-header ul").on("click", function () {
                e.showNav()
            })
            var order = e.getQueryString('id');
            e.getAjax('/wxCallback', {
                out_trade_no: order
            }, function (res) {
                console.log(res);
                e.code = res.code;
                if (res.code == 1) {
                    $(".total").text(res.money);
                    $(".time").text(res.time);
                }
            });
        }
    }).init()
});
//# sourceMappingURL=about.js.map