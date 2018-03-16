import Vue from 'vue'
import Router from 'vue-router'
import QRCode from "qrcodejs2";

Vue.use(Router); /* 使用路由 */
// Vue.use(QRCode);

let router = new Router({
  linkActiveClass: '',
  linkExactActiveClass: '',
  mode: 'history',
  /** 使用 HTML5 的 History 路由模式 */
  routes: [ /* 进行路由配置，规定“/”引入到App组件 */ {
    path: '/',
    name: 'App',
    /* 这里的name路径名 */
    // component: resolve => require(['@/App.vue'],resolve) /* 注册App组件 */ ,
    components: {
      default: resolve => require(['../views/main.vue'], resolve),
      AppHeader: resolve => require(['../views/header.vue'], resolve),
    },
    redirect: '/tab1',
    meta: {
      title: "练习册"
    },
    children: [{
        path: 'tab1',
        component: resolve => require(['../components/tab1.vue'], resolve),
      },
      {
        path: 'tab2',
        component: resolve => require(['../components/tab2.vue'], resolve),
      },
      {
        path: 'tab3',
        component: resolve => require(['../components/tab3.vue'], resolve),
      },
      {
        path: 'tab4',
        component: resolve => require(['../components/tab4/tab1.vue'], resolve),
      },
      {
        path: 'tab5',
        component: resolve => require(['../components/tab5/tab1.vue'], resolve),
      },
      {
        path: 'tab6',
        component: resolve => require(['../components/tab1.vue'], resolve),
      },
      {
        path: 'tab7',
        component: resolve => require(['../components/tab1.vue'], resolve),
      },
      {
        path: 'tab8',
        component: resolve => require(['../components/tab1.vue'], resolve),
      }
    ]
  }, ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  // document.querySelector('meta[name="keywords"]').setAttribute('content', 'keywords');
  // document.querySelector('meta[name="description"]').setAttribute('content', 'description');
  next();
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
export default router;
