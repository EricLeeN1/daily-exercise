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
        getAjax: function (url, datas, fn) {
            var dataCookies = JSON.parse(sessionStorage.getItem("handShake"));
            var keyData = {};
            for (var i in datas) {
                keyData[i] = datas[i];
            }
            keyData['ts'] = Date.parse(new Date()) / 1000 - 0 + JSON.parse(sessionStorage.getItem("handShake")).data.ts;
            keyData['key'] = JSON.parse(sessionStorage.getItem("handShake")).data.key;
            var signData = {};
            for (var i in keyData) {
                signData[i] = keyData[i];
            }
            signData['sec'] = JSON.parse(sessionStorage.getItem("handShake")).data.secret;
            $.ajax({
                type: "get",
                url: '' + this.site + '' + url + '' + $.param(keyData, true) + '&sign=' + _md5($.param(this.objKeySort(signData), true)) + '',
                dataType: 'json',
                success: fn
            })
        },
        postAjax: function (url, datas, fn) {
            var dataCookies = JSON.parse(sessionStorage.getItem("handShake"));
            datas['ts'] = Date.parse(new Date()) / 1000 - 0 + dataCookies.data.ts;
            var finallyDatas = datas, paramSign = '', signData = {};
            finallyDatas['key'] = dataCookies.data.key;
            finallyDatas['version'] = '2.0';
            for (var i in finallyDatas) {
                signData[i] = finallyDatas[i];
            }
            signData['sec'] = dataCookies.data.secret;
            for (var i in this.objKeySort(signData)) {
                paramSign += '&' + i + '=' + this.objKeySort(signData)[i];
            }
            finallyDatas['sign'] = _md5(paramSign.substring(1));
            $.ajax({
                type: 'post',
                url: this.site + url,
                data: finallyDatas,
                dataType: 'json',
                success: fn
            })
        },
        init: function () {
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
            if (!sessionStorage.getItem('handShake')) {
                that.handShake('id');
            } else {
                that.getInitData('id');
            }
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