import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import App from './app.vue';
import CryptoJS from 'crypto-js';


import './style.css';
import api from './libs/util.js';


Vue.use(VueRouter);
Vue.use(Vuex);
// 将API方法绑定到全局
Vue.prototype.$api = api;
Vue.config.productionTip = false;

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    document.querySelector('meta[name="keywords"]').setAttribute('content', 'keywords');
    document.querySelector('meta[name="description"]').setAttribute('content', 'description');
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

// // 数组排重
// function getFilterArray (array) {
//     const res = [];
//     const json = {};
//     for (let i = 0; i < array.length; i++){
//         const _self = array[i];
//         if(!json[_self]){
//             res.push(_self);
//             json[_self] = 1;
//         }
//     }
//     return res;
// }

const store = new Vuex.Store({
    state: {
        site: 'http://60.205.111.27:801',
        imgSite: 'http://60.205.111.27:807',
        handShake: null,
        version: '1.0.0',
        ajaxObj: null,
        sign : null
    },
    getters: {},
    mutations: {
        handShakeDatas(state, data) {
            state.handShake = data;
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
        objKeySort(state, arys) {
            console.log(arys);
            var newkey = Object.keys(arys).sort();
            var newObj = {};
            for (var i = 0; i < newkey.length; i++) {
                newObj[newkey[i]] = arys[newkey[i]];
            }
            console.log(newObj);
            state.ajaxObj = newObj;
        },
        toType: function (state, obj) {
            return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        },
        params(state, obj) {
            console.log(obj);
            let params = '';
            for (const index in obj) {
                params += '&' + index + '=' + obj[index];
            }
            if (params != null) {
                params = params.substring(1);
            }
            console.log(params);
            state.sign = params;
        },
        getAjaxDatas(state, data) {
            console.log(data);
            return data;
        }
    },
    actions: {
        handShakes(context) {
            api.post('WebService.asmx/AcquireSecretKey', {
                type: 3,
                ts: Date.parse(new Date()) / 1000
            }, r => {
                if (r.msgcode == 1) {
                    var key = CryptoJS.enc.Latin1.parse('l@j#g=c!w*)8(^5$');
                    var iv = CryptoJS.enc.Latin1.parse('L+*df5,Ir)b$=pkf');
                    r.data.key = CryptoJS.AES.decrypt(r.data.key, key, {
                        iv: iv,
                        padding: CryptoJS.pad.Pkcs7
                    }).toString(CryptoJS.enc.Utf8);
                    r.data.secret = CryptoJS.AES.decrypt(r.data.secret, key, {
                        iv: iv,
                        padding: CryptoJS.pad.Pkcs7
                    }).toString(CryptoJS.enc.Utf8);
                    context.commit('handShakeDatas', r.data);
                }
            }, r => {
                console.log(r.msg);
            });
        },
        getAjax: function (context, url, datas, success, failure) {
            let that = this;
            let handleDatas = that.state.handShake;
            let keyData = {};
            for (let i in datas) {
                keyData[i] = datas[i];
            }
            keyData['ts'] = Date.parse(new Date()) / 1000 - 0 + handleDatas.ts;
            keyData['key'] = handleDatas.key;
            keyData['version'] = this.state.version;
            var signData = {};
            for (var i in keyData) {
                signData[i] = keyData[i];
            }
            signData['sec'] = handleDatas.secret;
            context.commit('objKeySort', signData)
            let objData = that.state.ajaxObj;
            context.commit('params', objData);
            let sign = that.state.sign;
            console.log(sign);
            keyData['sign'] = CryptoJS.MD5(sign).toString();
            console.log(keyData);
            // + '' + $.param(keyData, true) + '&sign=' + _md5($.param(this.objKeySort(signData), true)
            // api.get(this.site + url, {}, success, failure);
            // context.commit('getAjaxDatas', r.data);
        },
        postAjax: function (url, datas, fn) {
            var dataCookies = JSON.parse(sessionStorage.getItem("handShake"));
            datas['ts'] = Date.parse(new Date()) / 1000 - 0 + dataCookies.data.ts;
            var finallyDatas = datas,
                paramSign = '',
                signData = {};
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
        }
    }
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => {
        return h(App)
    }
});