import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue' /** 这里@相当于"../" */

Vue.use(Router); /* 使用路由 */

let router = new Router({
  routes: [ /* 进行路由配置，规定“/”引入到Hello组件 */ {
    path: '/',
    name: 'index',
    /* 这里的name路径名 */
    component: Index /* 注册Hello组件 */ ,
    meta: {
      title: "练习册"
    }
  }]
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
