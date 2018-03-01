import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex';
import App from "./app.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

//路由配置
const Routers = [{
        path: '/',
        meta: {
            title: "首页"
        },
        component: (resolve) => require(['./index.vue'], resolve)
    },
    // {
    //     path: '/about',
    //     meta: {
    //         title: "关于"
    //     },
    //     component: (resolve) => require(['./views/about.vue'], resolve)
    // }, {
    //     path: '/user/:id',
    //     meta: {
    //         title: "个人主页"
    //     },
    //     component: (resolve) => require(['./views/user.vue'], resolve)
    // }, {
    //     path: '/login',
    //     meta: {
    //         title: "登录页面"
    //     },
    //     component: (resolve) => require(['./views/login.vue'], resolve)
    // }, {
    //     path: '*',
    //     redirect: "./index"
    // }
];

const RouterConfig = {
    // 使用HTML5的history路由模式
    mode: "history",
    routes: Routers
}

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
    // if (window.localStorage.getItem('token')) {
    //     next();
    // } else if (to.path != '/login' && to.path != '/index') {
    //     next('./login');
    // }
});
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

const moduleA = {
    //vuex的配置
    state: {
        count: 0,
        list: [1, 5, 8, 10, 30, 50]
    },
    mutations: {
        increment(state, n = 1) {
            state.count += n;
        },
        decrease(state, params) {
            state.count -= params.count;
        }
    },
    getters: {
        filteredList(state) {
            return state.list.filter(item => item < 10);
        },
        listCount(state, getters) {
            return getters.filteredList.length;
        },
        sumCount(state, getters, rootState) {
            return state.count + rootState.count;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment');
        },
        asyncIncrement(context) {
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit('increment');
                    resolve();
                }, 1000);
            });
        }
    }
}
const store = new Vuex.Store({
    modules: {
        a: moduleA
    }
});

new Vue({
    el: "#app",
    router: router,
    // 使用vuex
    store: store,
    render: h => {
        return h(App)
    }
})