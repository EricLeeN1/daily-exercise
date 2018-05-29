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
        pagesLength: 1,
        page: 1,
        getInfos(page = 1) {
            let that = this;
            let type = that.getQueryString('type');
            let url = `/news/page/${page}/column/${type}`;
            that.getAjax(url, {}, function (res) {
                console.log(res);
                if (res.status == 200) {
                    let newsDatas = res.data.newsList;
                    let newsRightDatas =
                        res.data.rightNewsList;
                    let config = res.data.Configs;
                    let htmlLeft = '';
                    let htmlRight = '';
                    let count = res.data.count;
                    let pagesHtml = '';
                    if (newsDatas) {
                        newsDatas.forEach(ele => {
                            htmlLeft +=
                                `<li>
                                    <a href="./news.html?id=${ele.str_id}">
                                        <div class="img-infos">
                                            <img src="${that.site + ele.str_thumb}" alt="">
                                            <span>${ele.news_time}</span>
                                        </div>
                                        <div class="des-infos">
                                            <h3>${ele.str_title}</h3>
                                            <p>${ele.str_guide}</p>
                                        </div>
                                    </a>
                                </li>`
                        });
                        $("#news-list-big>ul").append(htmlLeft);

                    } else {
                        $("#news-list-big>ul").append('<h1>Sorry,这里还什么都没有</h1>');
                    }
                    if (config) {
                        config.forEach(ele => {
                            let metaHave = `meta[name="${ele.name}"]`;
                            if (ele.name == 'title') {
                                $("title").text(ele.value);
                            } else {
                                if ($(metaHave)[0]) {
                                    $(metaHave).attr('content', ele.value);
                                } else {
                                    $("head").append(`<meta name="${ele.name}" content="${ele.value}" />`);
                                }
                            }
                        });
                    }
                    if (newsRightDatas) {
                        newsRightDatas.forEach(ele => {
                            htmlRight +=
                                `<li>
                                    <a href="./news.html?id=${ele.str_id}">
                                        <div class="img-infos">
                                            <img src="${that.site + ele.str_thumb}" alt="">
                                        </div>
                                        <div class="des-infos">
                                            <h3>${ele.str_title}</h3>
                                            <p>${ele.news_time}</p>
                                        </div>
                                        <img src="" alt="" class="icon">
                                    </a>
                                </li>`
                        });
                        $("#news-list-small>ul").append(htmlRight);
                    } else {
                        $("#news-list-small>ul").append('<h1>Sorry,这里还什么都没有</h1>');
                    }
                    that.pagesLength = Math.ceil(count / 8);
                } else {
                    alert(res.message);
                }
            });
        },
        addInfos(){},
        setCrumb() {
            let that = this;
            let type = that.getQueryString('type');
            let asideTitle = $("#news-list-small h2 span");
            if (type == 9) {
                asideTitle.text('公益明星').next().attr('href', '/newsList.html?type=8');
            }else if (type ==8) {
                asideTitle.text('公益行动').next().attr('href', '/newsList.html?type=9');
            }
        },
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
            var context = "";
            if (r != null)
                context = r[2];
            reg = null;
            r = null;
            return context == null || context == "" || context == "undefined" ? "" : context;
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
            let that = this;
            that.getInfos();
            that.setCrumb();
            that.fontSize();
            that.setSeo();
            $(".common-header ul").on('click', function () {
                that.showNav();
            });
            $("#show-pages").on('click', 'li', function () {
                if ($(this).hasClass('active')) {
                    return;
                }
                let pages = $(this).attr('data-page');
                that.getInfos(pages);
            })
        }
    }
    Base.init();
});