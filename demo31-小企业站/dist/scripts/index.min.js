$(function () {
    jQuery.support.cors = true;
    var Base = window.Base || {};
    Base = {
        site: '',
        site2: '',
        default: '',
        replyHtml: '<div class="reply-area"><textarea maxlength="140" name="reply-content" id="reply-content"></textarea><div id="btn-reply">回复</div></div>',
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
        objKeySort: function (arys) {
            var newkey = Object.keys(arys).sort();
            var newObj = {};
            for (var i = 0; i < newkey.length; i++) {
                newObj[newkey[i]] = arys[newkey[i]];

            }
            return newObj; //返回排好序的新对象
        },
        // tab:function (eleHover,eleShow,activeClass) {
        //     var index= $(eleHover).index();
        //     $(eleShow).hide().eq(index).show();
        // },
        // clickTab:function (eleHover,eleShow,activeClass) {
        //     var index= $(eleHover).index();
        //     $(eleHover).addClass(activeClass).siblings().removeClass(activeClass);
        //     $(eleShow).hide().eq(index).show();
        // },
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
                // $(this).addClass('news-all-title-active').siblings().removeClass('news-all-title-active');
                $(".qrcode>li").hide().eq(index).show();
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