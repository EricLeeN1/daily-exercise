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
        getBannerInfos() {
            this.getAjax('/intro', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $(".banner>.activity-des>p").text(res.data);
                } else {
                    alert(res.message);
                }
            });
        },
        welfareDatas() {
            this.getAjax('/data', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    $("#donate ul li:eq(0) a").children('h3').text(res.data.aims).countUp();
                    $("#donate ul li:eq(1) a").children('h3').text(res.data.num).countUp();
                    $("#donate ul li:eq(2) a").children('h3').text(res.data.total).countUp();
                    $("#donate ul li:eq(3) a").children('h3').text(res.data.sumofcinemas).countUp();
                } else {
                    alert(res.message);
                }
            });
        },
        newsList8() {
            let that = this;
            this.getAjax('/newsList/column/8', {
                column: 8
            }, function (res) {
                // console.log(res);
                if (res.status == 200) {
                    let datas = res.data.StrategyList;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach(ele => {
                            let imgSite = that.site + ele.str_thumb;
                            swiperSlides += `
                            <a href="./news.html?id=${ele.str_id}" class="swiper-slide" data-id="${ele.str_id}">
                                <img src="${imgSite}" alt="${ele.str_title}">
                                <h3>${ele.str_title}</h3>
                            </a>
                            `;
                        });
                        // console.log(swiperSlides);
                        $("#action>.swiper-wrapper").html(swiperSlides);
                    } else {
                        $("#action>.swiper-wrapper").html('<h3>这里还什么都没有</h3>');
                    }
                } else {
                    alert(res.message);
                }
            });
        },
        newsList9() {
            let that = this;
            that.getAjax('/newsList/column/9', {
                column: 9
            }, function (res) {
                // console.log('9');
                // console.log(res);
                if (res.status == 200) {
                    let datas = res.data.StrategyList;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach((ele, index) => {
                            let imgSite = that.site + ele.str_thumb;
                            swiperSlides +=
                                `<a href="./news.html?id=${ele.str_id}" class="swiper-slide" data-id="${ele.str_id}">
                           <img src="${imgSite}" alt="${ele.str_title}">
                           <h3>${ele.str_title}</h3>
                           </a>`
                        });
                        $("#donate-star>.swiper-wrapper").html(swiperSlides);
                        //3d
                    } else {
                        $("#donate-star>.swiper-wrapper").html('<h3>这里还什么都没有</h3>');
                    }
                } else {
                    alert(res.message);
                }
            });
        },
        companyList() {
            let that = this;
            that.getAjax('/companyList', {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    let datas = res.data;
                    if (datas.length > 0) {
                        let swiperSlides = '';
                        datas.forEach((ele, index) => {
                            let imgSite = that.site + ele.logo;
                            if (index < 9) {
                                swiperSlides += `
                            <li>
                                <a href="${ele.link_url}" class="swiper-slide" target="_blank">
                                    <img src="${imgSite}" alt="${ele.link_url}">
                                </a>
                            </li>
                            `;
                            }
                        });
                        $("#company>ul").html(swiperSlides);
                    } else {
                        $("#company>ul").html('<h3>这里还什么都没有</h3>');
                    }
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
            that.fontSize();
            that.setSeo();
            that.getBannerInfos();
            that.welfareDatas();
            that.newsList8();
            that.newsList9();
            that.companyList();
        }
    }
    Base.init();
});