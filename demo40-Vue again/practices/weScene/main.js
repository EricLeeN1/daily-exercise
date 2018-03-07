import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';
import api from './static/scripts/axios.js';
let qs = require('qs');

// import product_data from './product';

Vue.use(VueRouter);
Vue.use(Vuex);
// 将API方法绑定到全局
Vue.prototype.$api = api;
Vue.config.productionTip = false;

// 路由配置
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
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
    },
    getters: {
        handShakeData: function (state) {
            // return state.handShakeData;
        }
    },
    mutations: {
        handShakeDatas(state, data) {
            state.handShake = data;
            state.version = data.version;
        }

    },
    actions: {
        handShakes(context) {
            api.post('/WebService.asmx/AcquireSecretKey',{
                type: 3,
                ts: Date.parse(new Date()) / 1000
            }, r => {
                console.log(r);
            }, r => {
                console.log(r);
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