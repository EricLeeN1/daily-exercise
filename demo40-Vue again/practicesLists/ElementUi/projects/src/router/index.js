import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: '',
  linkExactActiveClass: '',
  mode: "history",
  routes: [{
    path: '/',
    name: 'App',
    components: {
      default: resolve => require(['@/components/Main.vue'], resolve),
      AppHeader: resolve => require(['@/components/AppHeader.vue'], resolve),
    },
    children: [{
        path: 'base-layout',
        component: resolve => require(['@/components/Layout.vue'], resolve)
      }, {
        path: 'base-container',
        component: resolve => require(['@/components/Container.vue'], resolve)
      },
      {
        path: 'base-button',
        component: resolve => require(['@/components/Button.vue'], resolve)
      }
    ]
  }]
})
