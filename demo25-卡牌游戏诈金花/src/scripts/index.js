$(function () {
    jQuery.support.cors = true;
    var Base = window.Base || {};
    Base = {
        default: '',
        usedCard: [],
        leavedCard: [],
        playersCard: [],
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
        setCards: function () {
            // 拿出一副新牌;
            var that = this;
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 4; j++) {
                    that.leavedCard.push(i + '-' + j);
                }
            }
            //洗牌
            that.leavedCard.sort(that.randomSort);
            that.showCardInfos();
            //创建玩家牌数组
            var playerNumber = $("#container>section").length || 0;
            for (var k = 0; k < playerNumber; k++) {
                that.playersCard[k] = [];
            }
        },
        randomSort: function (a, b) {
            return Math.random() > .5 ? -1 : 1;
            //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
        },
        showCardInfos: function () {
            var that = this;
            $('#container .cards-leaved-number>span').text(that.leavedCard.length);
            $('#container .cards-used-number>span').text(that.usedCard.length);
        },
        deal: function () {
            var that = this,
                playerNumber = $("#container>section").length || 0,
                length = $("#player1>.user-card>img").length || 0,
                top = (length * 30) + 'px';
            if (length < 3) {
                for (var i = 0; i < playerNumber; i++) {
                    var data = that.randomCards();
                    if (!data) {
                        alert('数据错误');
                    }
                    $("#container>section").eq(i).children('.user-card').append("<img src='images/" + data.value + ".png' style=top:" + top + ">");
                    that.playersCard[i].push(data.value);
                    that.leavedCard.splice(data.index, 1);
                    that.usedCard.push(data.value);
                }
            } else {
                alert('牌够了');
            }

            that.showCardInfos();
        },
        judge: function () {
            var that = this,
                newPlayerCards = [];
            console.log(that.playersCard);
            //将数组设置为三维数组，用来区分不同用户，第几张牌、点数及花色，
            for (var i = 0; i < that.playersCard.length; i++) {
                newPlayerCards[i] = [];
                for (var j = 0; j < 3; j++) {
                    that.playersCard[i][j]
                    newPlayerCards[i][j] = [];
                }
            }
        },
        randomCards: function () {
            var that = this, length = that.leavedCard.length, playerNumber = $("#container>section").length;
            var randomCard = parseInt(Math.random() * length);
            if (playerNumber * 3 < length) {
                var data = {
                    index: randomCard,
                    value: that.leavedCard[randomCard]
                };
                return data;
            } else {
                console.log("牌不够了");
            }
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
            that.setCards();
            $("#deal").on('click', function () {
                that.deal();
            });
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