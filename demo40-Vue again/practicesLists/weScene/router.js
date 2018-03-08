const Routers = [{
        path: './',
        meta: {
            title: "微现场活动"
        },
        component: (resolve) => require(['./app.vue'], resolve)
    },
    {
        path: './tab1',
        meta: {
            title: "Tab1"
        },
        component: (resolve) => require(['./views/tab.vue'], resolve)
    },
    {
        path: './tab',
        component: (resolve) => require(['./views/tab.vue'], resolve)
    },
    {
        path: "./404",
        component: (resolve) => require(['./views/404.vue'], resolve)
    }
];
export default Routers;

// $(function () {
//     jQuery.support.cors = true;
//     var Base = window.Base || {};
//     Base = {
//         site: 'http://60.205.111.27:801',
//         site2: 'http://60.205.111.27:807',
//         default: '',
//         handShake: function (id) {
//             $("#loading-modal").show();
//             var that = this,
//                 pid = that.getQueryString(id);
//             that.id = pid;
//             if (pid == '') {
//                 // window.location.href = '404.html';
//             } else {
//                 $.ajax({
//                     type: "POST",
//                     url: Base.site + '/WebService.asmx/AcquireSecretKey',
//                     data: {
//                         type: 3,
//                         ts: Date.parse(new Date()) / 1000
//                     },
//                     dataType: "json",
//                     success: function (datas) {
//                         if (datas.msgcode == 1) {
//                             var key = CryptoJS.enc.Latin1.parse('l@j#g=c!w*)8(^5$');
//                             var iv = CryptoJS.enc.Latin1.parse('L+*df5,Ir)b$=pkf');
//                             datas.data.key = CryptoJS.AES.decrypt(datas.data.key, key, {
//                                 iv: iv,
//                                 padding: CryptoJS.pad.Pkcs7
//                             }).toString(CryptoJS.enc.Utf8);
//                             datas.data.secret = CryptoJS.AES.decrypt(datas.data.secret, key, {
//                                 iv: iv,
//                                 padding: CryptoJS.pad.Pkcs7
//                             }).toString(CryptoJS.enc.Utf8);
//                             sessionStorage.setItem("handShake", JSON.stringify(datas));
//                             if (pid) {
//                                 that.getInfos(pid);
//                             }
//                         } else {
//                             alert('服务器连接错误');
//                         }
//                     }
//                 });
//             }
//         },
//         getInfos(id) {
//             let that = this;
//             that.getAjax('/FrontendService.asmx/UserWineShareDetail?', {
//                 id: id
//             }, function (res) {
//                 $("#loading-modal").hide();
//                 if (res.msgcode == 1) {
//                     that.data = res.data;
//                     $('#packet-panel>div').eq(0).show().siblings().hide();
//                     $('#packet-panel .panel-1 .panel-title p').text('来自' + that.data.sname + '发起的酒水红包');
//                     if (res.data.remark != '') {
//                         $('.panel-btn-slogan').text(res.data.remark);
//                     }
//                     if (res.data.list.length > 0) {
//                         $("#packet-lists").show();
//                         let html = '',
//                             imgSite = that.site2;
//                         res.data.list.forEach(ele => {
//                             if (ele.luck) {
//                                 html += `
//                                 <li class="packet-item">
//                                     <img src="${imgSite}${ele.ulogo}" alt="用户头像" class="item-logo">
//                                     <div class="item-infos">
//                                         <h4>${ele.uname}</h4>
//                                         <p>${ele.time}</p>
//                                     </div>
//                                     <div class="item-lucky">运气王</div>
//                                     <div class="item-num">${ele.wnum}</div>
//                                 </li>`;
//                             } else {
//                                 html += `
//                                 <li class="packet-item">
//                                     <img src="${imgSite}${ele.ulogo}" alt="用户头像" class="item-logo">
//                                     <div class="item-infos">
//                                         <h4>${ele.uname}</h4>
//                                         <p>${ele.time}</p>
//                                     </div>
//                                     <div class="item-num">${ele.wnum}</div>
//                                 </li>
//                                 `;
//                             }
//                         });
//                         $("#packet-lists ul").html(html);
//                     }
//                 } else {
//                     that.msgTips(res.msg);
//                 }
//             });
//         },
//         getInitData: function (id, type) {
//             $("#loading-modal").show();
//             var that = this,
//                 pid = that.getQueryString(id);
//             that.id = pid;
//             if (pid) {
//                 that.getInfos(pid);
//             } else {
//                 window.location.href = '404.html';
//             }
//         },
//         getQueryString: function (name) {
//             var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//             var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
//             var context = "";
//             if (r != null)
//                 context = r[2];
//             reg = null;
//             r = null;
//             return context == null || context == "" || context == "undefined" ? "" : context;
//         },
//         objKeySort: function (arys) {
//             var newkey = Object.keys(arys).sort();
//             var newObj = {};
//             for (var i = 0; i < newkey.length; i++) {
//                 newObj[newkey[i]] = arys[newkey[i]];

//             }
//             return newObj; //返回排好序的新对象
//         },
//         getAjax: function (url, datas, fn) {
//             var dataCookies = JSON.parse(sessionStorage.getItem("handShake"));
//             var keyData = {};
//             for (var i in datas) {
//                 keyData[i] = datas[i];
//             }
//             keyData['ts'] = Date.parse(new Date()) / 1000 - 0 + JSON.parse(sessionStorage.getItem("handShake")).data.ts;
//             keyData['key'] = JSON.parse(sessionStorage.getItem("handShake")).data.key;
//             var signData = {};
//             for (var i in keyData) {
//                 signData[i] = keyData[i];
//             }
//             signData['sec'] = JSON.parse(sessionStorage.getItem("handShake")).data.secret;
//             $.ajax({
//                 type: "get",
//                 url: '' + this.site + '' + url + '' + $.param(keyData, true) + '&sign=' + _md5($.param(this.objKeySort(signData), true)) + '',
//                 dataType: 'json',
//                 success: fn
//             })
//         },
//         postAjax: function (url, datas, fn) {
//             var dataCookies = JSON.parse(sessionStorage.getItem("handShake"));
//             datas['ts'] = Date.parse(new Date()) / 1000 - 0 + dataCookies.data.ts;
//             var finallyDatas = datas,
//                 paramSign = '',
//                 signData = {};
//             finallyDatas['key'] = dataCookies.data.key;
//             finallyDatas['version'] = '2.0';
//             for (var i in finallyDatas) {
//                 signData[i] = finallyDatas[i];
//             }
//             signData['sec'] = dataCookies.data.secret;
//             for (var i in this.objKeySort(signData)) {
//                 paramSign += '&' + i + '=' + this.objKeySort(signData)[i];
//             }
//             finallyDatas['sign'] = _md5(paramSign.substring(1));
//             $.ajax({
//                 type: 'post',
//                 url: this.site + url,
//                 data: finallyDatas,
//                 dataType: 'json',
//                 success: fn
//             })
//         },
//         msgTips(msg) {
//             $("#msg-tips").text(msg).show();
//             setTimeout(() => {
//                 $("#msg-tips").hide().text('');
//             }, 2000);
//         },
//         toLogin() {
//             window.sessionStorage.setItem('url', window.location);
//             window.location.href = 'logReg.html?' + window.location;
//         },
//         getThis() {
//             let that = this;
//             if (window.sessionStorage.getItem('isClient') && that.acc) {
//                 that.postAjax('/FrontendService.asmx/UserReceiveWineRedEnvelopes', {
//                     id: that.id,
//                     acc: that.acc
//                 }, function (res) {
//                     console.log(res);
//                     $("#loading-modal").hide();
//                     if (res.msgcode == 1) {
//                         if (res.data.status == 1 || res.data.status == 2) {
//                             $('#packet-panel>div').eq(1).show().siblings().hide();
//                             $("#packet-panel .panel-get .panel-title p").text(res.data.sname + '分享的');
//                             $("#packet-panel .panel-get .panel-title h3").text(res.data.winfo);
//                             if (res.data.status == 1) {
//                                 that.msgTips(res.msg);
//                             }
//                         } else if (res.data.status == 3) {
//                             $('#packet-panel>div').eq(2).show().siblings().hide();
//                         } else if (res.data.status == 4) {
//                             $("#packet-panel>div").eq(2).show().siblings().hide();
//                         }
//                         that.getInfos(that.id);
//                     }
//                 });
//             } else {
//                 if (that.isLogin()) {
//                     that.postAjax('/FrontendService.asmx/UserReceiveWineRedEnvelopes', {
//                         id: that.id
//                     }, function (res) {
//                         console.log(res);
//                         $("#loading-modal").hide();
//                         if (res.msgcode == 1) {
//                             if (res.data.status == 1 || res.data.status == 2) {
//                                 $('#packet-panel>div').eq(1).show().siblings().hide();
//                                 $("#packet-panel .panel-get .panel-title p").text(res.data.sname + '分享的');
//                                 $("#packet-panel .panel-get .panel-title h3").text(res.data.winfo);
//                                 if (res.data.status == 1) {
//                                     that.msgTips(res.msg);
//                                 }
//                             } else if (res.data.status == 3) {
//                                 $('#packet-panel>div').eq(2).show().siblings().hide();
//                             } else if (res.data.status == 4) {
//                                 $("#packet-panel>div").eq(2).show().siblings().hide();
//                             }
//                             that.getInfos(that.id);
//                         }
//                     });
//                 } else {
//                     that.toLogin();
//                 }
//             }
//         },
//         share: function () {
//             if (Base.isClient) {
//                 var acc = Base.getQueryString('acc'),
//                     href = window.location.href,
//                     index = href.indexOf('acc');
//                 if (href.charAt(index - 1) == '&') {
//                     var accStr = '&acc=' + acc;
//                 } else if (href.charAt(index - 1) == '?') {
//                     var accStr = 'acc=' + acc + '&';
//                 }
//                 var params = {
//                     title: Base.shareData.title,
//                     subTitle: Base.shareData.subTitle,
//                     shareUrl: href.replace(accStr, "")
//                 };
//                 WebViewJavascriptBridge.callHandler('skipCategoryOfShare', params, function (response) {});
//             } else {
//                 if (browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面
//                     var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
//                     if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq") {
//                         //在微信中打开或在QQ空间打开
//                         if (confirm("您当前使用的是qq/微信，无法参与本次活动，确认下载app？参与到孤独活动中来?")) {
//                             location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
//                         }
//                     } else if (browser.versions.ios || browser.versions.android) {
//                         if (confirm("您当前使用的是浏览器，无法参与本次活动，确认下载app？参与到孤独活动中来?")) {
//                             location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
//                         }
//                     }
//                     if (ua.match(/WeiBo/i) == "weibo") {
//                         if (confirm("您当前使用的是新浪，无法参与本次活动，确认下载app？参与到孤独活动中来?")) {
//                             location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
//                         }
//                     }
//                 }
//             }
//         },
//         readyToUse() {
//             this.downloadApp();
//         },
//         downloadApp: function () {
//             let that = this;
//             if (window.sessionStorage.getItem('isClient') && that.acc) {

//             } else {
//                 if (browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面
//                     var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
//                     if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq") {
//                         //在微信中打开或在QQ空间打开
//                         if (confirm("您当前使用的是qq/微信，无法参与本次活动，确认下载app？参与到魔镜活动中来?")) {
//                             location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
//                         }
//                     } else if (browser.versions.ios || browser.versions.android) {
//                         if (confirm("您当前使用的是浏览器，无法参与本次活动，确认下载app？参与到魔镜活动中来?")) {
//                             location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
//                         }
//                     }
//                     if (ua.match(/WeiBo/i) == "weibo") {
//                         if (confirm("您当前使用的是新浪，无法参与本次活动，确认下载app？参与到魔镜活动中来?")) {
//                             location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
//                         }
//                     }
//                 } else {
//                     if (confirm("您当前使用的是PC端页面，无法参与本次活动，确认下载app？参与到魔镜活动中来?")) {
//                         location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
//                     }
//                 }
//             }
//         },
//         isLogin: function () {
//             var that = this;
//             if (sessionStorage.getItem('login')) {
//                 return true;
//             } else {
//                 return false;
//             }
//         },
//         init: function () {
//             var that = this;
//             that.acc = that.getQueryString('acc');
//             if (!sessionStorage.getItem('handShake')) {
//                 that.handShake('id');
//             } else {
//                 that.getInitData('id');
//             };
//             if (sessionStorage.getItem('login')) {
//                 $('#packet-panel>div').eq(0).hide();
//                 setTimeout(() => {
//                     that.getThis();
//                 }, 500);
//             }
//             $('#ready-To-Use,#ready-To-App').on('click', function () {
//                 that.readyToUse();
//             });
//             $("#btn-get").on('click', function () {
//                 let value = $('#value').val();
//                 window.sessionStorage.setItem('number', value);
//                 that.getThis();
//             });
//         }
//     };
//     var browser = {
//         versions: function () {
//             var u = navigator.userAgent,
//                 app = navigator.appVersion;
//             return { //移动终端浏览器版本信息
//                 trident: u.indexOf('Trident') > -1, //IE内核
//                 presto: u.indexOf('Presto') > -1, //opera内核
//                 webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//                 gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//                 mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
//                 ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//                 android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
//                 iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
//                 iPad: u.indexOf('iPad') > -1, //是否iPad
//                 webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
//             };
//         }(),
//         language: (navigator.browserLanguage || navigator.language).toLowerCase()
//     };

//     function setupWebViewJavascriptBridge(callback) {
//         if (browser.versions.android) {
//             if (window.WebViewJavascriptBridge) {
//                 callback(WebViewJavascriptBridge)
//             } else {
//                 document.addEventListener(
//                     'WebViewJavascriptBridgeReady',
//                     function () {
//                         callback(WebViewJavascriptBridge)
//                     },
//                     false
//                 );
//             }
//         } else if (browser.versions.iPhone || browser.versions.iPad) {
//             if (window.WVJBCallbacks) {
//                 return window.WVJBCallbacks.push(callback);
//             }
//             window.WVJBCallbacks = [callback];
//             var WVJBIframe = document.createElement('iframe');
//             WVJBIframe.style.display = 'none';
//             WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
//             document.documentElement.appendChild(WVJBIframe);
//             setTimeout(function () {
//                 document.documentElement.removeChild(WVJBIframe)
//             }, 0);
//         }

//     };
//     setupWebViewJavascriptBridge(function (bridge) {
//         if (browser.versions.android) {
//             bridge.init(function (message, responseCallback) {
//                 var data = {
//                     'Javascript Responds': '测试中文!'
//                 };
//                 responseCallback(data);
//             });
//         };
//         bridge.registerHandler('isConfirmAgainSelf', function (data, responseCallback) {
//             responseCallback('js执行过了');
//             window.sessionStorage.setItem('isClient', data);
//         });
//     });
//     Base.init();
// });