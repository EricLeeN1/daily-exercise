$(function () {
    jQuery.support.cors = true;
    var Base = window.Base || {};
    Base = {
        site: '',
        site2: '',
        addBookmark: function (title, url) {

            if (window.sidebar) {

                window.sidebar.addPanel(title, url, "");

            } else if (document.all) {

                window.external.AddFavorite(url, title);

            } else if (window.opera && window.print) {

                return true;

            }

        },
        setHome: function (url) {

            if (document.all) {

                document.body.style.behavior = 'url(#default#homepage)';

                document.body.setHomePage(url);

            } else if (window.sidebar) {

                if (window.netscape) {

                    try {

                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

                    } catch (e) {

                        alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");

                    }

            }

                if (window.confirm("你确定要设置" + url + "为首页吗？") == 1) {

                    var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);

                    prefs.setCharPref('browser.startup.homepage', url);

                }

            }

        },
        init: function () {
            var that = this;
            $("#nav>ul>li").on('mouseover', function () {
                var index = $(this).index();
                $("#sub-nav>ul").hide().eq(index).show();
            });
            $("#nav>ul>li").on('click', function () {
                var index = $(this).index();
                $(this).addClass('nav-active').siblings().removeClass('nav-active');
                $("#sub-nav>ul").hide().eq(index).show();
            });
            $(".news-all-panel-title>ul>li").on('mouseover', function () {
                var index = $(this).index();
                $(".news-all-tab>li").hide().eq(index).show();
            });
            $(".news-all-panel-title>ul>li").on('click', function () {
                var index = $(this).index();
                $(this).addClass('news-all-title-active').siblings().removeClass('news-all-title-active');
                $(".news-all-tab>li").hide().eq(index).show();
            });
            $(".focus-us>ul>li").on('mouseover', function () {
                var index = $(this).index();
                $(".qrcode>li").hide().eq(index).show();
            });
            $(".focus-us>ul>li").on('click', function () {
                var index = $(this).index();
                $(".qrcode>li").hide().eq(index).show();
            });
            $("#setHome").on('click', function () {
                that.setHome('http://www.jb51.net');
            });
            $("#addBookmark").on('click', function () {
                that.addBookmark('湖南钢结构', 'http://www.hngjg.com');
            });
            console.log('' +
                '//                            _ooOoo_\n' +
                '//                           o8888888o\n' +
                '//                           88" . "88\n' +
                '//                           (| -_- |)\n' +
                '//                            O\\ = /O\n' +
                '//                        ____/`---\'\\____\n' +
                '//                      .   \' \\\\| |// `.\n' +
                '//                       / \\\\||| : |||// \\\n' +
                '//                     / _||||| -:- |||||- \\\n' +
                '//                       | | \\\\\\ - /// | |\n' +
                '//                     | \\_| \'\'\\---/\'\' | |\n' +
                '//                      \\ .-\\__ `-` ___/-. /\n' +
                '//                   ___`. .\' /--.--\\ `. . __\n' +
                '//                ."" \'< `.___\\_<|>_/___.\' >\'"".\n' +
                '//               | | : `- \\`.;`\\ _ /`;.`/ - ` : | |\n' +
                '//                 \\ \\ `-. \\_ __\\ /__ _/ .-` / /\n' +
                '//         ======`-.____`-.___\\_____/___.-`____.-\'======\n' +
                '//                            `=---=\'\n' +
                '//\n' +
                '//         .............................................\n' +
                '//                  佛祖镇楼                  BUG辟易');
            var that = this;
            // if (!sessionStorage.getItem('handShake')) {
            //     that.handShake('id');
            // } else {
            //     that.getInitData('id');
            // }

        }
    };
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {     //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    Base.init();
});
$(function () {
    function IETester(userAgent) {
        var UA = userAgent || navigator.userAgent;
        if (/msie/i.test(UA)) {
            return UA.match(/msie (\d+\.\d+)/i)[1];
        } else if (~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')) {
            return UA.match(/rv:(\d+\.\d+)/)[1];
        }
        return false;
    }

    //不传参数返回当前IE版本，如果不是IE内核浏览器，返回false
    console.log(IETester())
    if (IETester()) {
        $('#chrome-Tip').show();
    } else {
        $('#chrome-Tip').hide();
    }
    $('#chromeTipCloseBtn').click(function () {
        $('#chrome-Tip').hide();
    });
});
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
});
