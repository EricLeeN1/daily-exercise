import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';

// import product_data from './product';

Vue.use(VueRouter);
Vue.use(Vuex);

// 路由配置
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    console.log('====================================');
    console.log(to);
    console.log('====================================');
    window.document.title = to.meta.title;
    document.querySelector('meta[name="keywords"]').setAttribute('content', 'keywords')
    document.querySelector('meta[name="description"]').setAttribute('content', 'description');
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

function ajax(url, methods, params, fnsuss, fnfail) {
    let xhr = new XMLHttpRequest();
    let method = methods.toUpperCase();
    xhr.open(method, url, true);
    xhr.send();
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fnsuss(xhr.responseText);
        } else {
            fnfail(xhr.status);
        }
    }
}
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
        // productList: [],
        // cartList: []
        site: 'http://60.205.111.27:801',
        imgSite: 'http://60.205.111.27:807',
    },
    getters: {
        // brands: state => {
        //     const brands = state.productList.map(item => item.brand);
        //     return getFilterArray(brands);
        // },
        // colors: state => {
        //     const colors = state.productList.map(item => item.color);
        //     return getFilterArray(colors);
        // }
        handShakeData: function (state) {
            return state.handShakeData;
        }
    },
    mutations: {
        // // 添加商品列表
        // setProductList (state, data) {
        //     state.productList = data;
        // },
        handShakeDatas(state, data) {
            state.handShake = data;
            state.version = data.version;
            console.log(state.handShake.version);
        }
        // // 添加到购物车
        // addCart (state, id) {
        //     // 先判断购物车是否已有，如果有，数量+1
        //     const isAdded = state.cartList.find(item => item.id === id);
        //     if (isAdded) {
        //         isAdded.count ++;
        //     } else {
        //         state.cartList.push({
        //             id: id,
        //             count: 1
        //         })
        //     }
        // },
        // // 修改商品数量
        // editCartCount (state, payload) {
        //     const product = state.cartList.find(item => item.id === payload.id);
        //     product.count += payload.count;
        // },
        // // 删除商品
        // deleteCart (state, id) {
        //     const index = state.cartList.findIndex(item => item.id === id);
        //     state.cartList.splice(index, 1);
        // },
        // // 清空购物车
        // emptyCart (state) {
        //     state.cartList = [];
        // }
    },
    actions: {
        // // 请求商品列表
        // getProductList (context) {
        //     // 真实环境通过 ajax 获取，这里用异步模拟
        //     setTimeout(() => {
        //         context.commit('setProductList', product_data);
        //     }, 500);
        // },
        // // 购买
        // buy (context) {
        //     // 真实环境应通过 ajax 提交购买请求后再清空购物列表
        //     return new Promise(resolve=> {
        //         setTimeout(() => {
        //             context.commit('emptyCart');
        //             resolve();
        //         }, 500)
        //     });
        // }
        handShakes(context) {
            return new Promise(function (resolve, reject) {
                ajax('./package.json', "get", function (res) {
                    resolve(res);
                }, function (res) {
                    reject(res);
                });
            }).then(function (res) {
                let data = JSON.parse(res);
                context.commit('handShakeDatas', data);
            }, function (res) {
                context.commit('handShakeDatas', res);
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