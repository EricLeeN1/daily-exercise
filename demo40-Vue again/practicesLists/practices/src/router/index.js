import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue' /** 这里@相当于"../" */
import QRCode from "qrcodejs2";
import Tab1 from "../components/tab1.vue";
import Tab2 from "../components/tab2.vue";

Vue.use(Router); /* 使用路由 */
// Vue.use(QRCode);

let router = new Router({
  linkActiveClass: '',
  linkExactActiveClass: '',
  mode: 'history',
  /** 使用 HTML5 的 History 路由模式 */
  routes: [ /* 进行路由配置，规定“/”引入到Hello组件 */ {
      path: '/',
      name: 'App',
      /* 这里的name路径名 */
      component: App /* 注册App组件 */ ,
      redirect: '/tab1',
      meta: {
        title: "练习册"
      },
      children: [{
          path: 'tab1',
          component: require,
        },
        {
          path: 'tab2',
          component: Tab2,
        }
      ]
    },
  ],
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
