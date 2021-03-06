import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: '',
  linkExactActiveClass: '',
  mode: "history",
  routes: [{
    path: '/',
    name: 'App',
    redirect: "/base-layout",
    components: {
      default: resolve => require(['@/components/Main.vue'], resolve),
      AppHeader: resolve => require(['@/components/AppHeader.vue'], resolve),
    },
    children: [{
        path: 'base-layout',
        component: resolve => require(['@/components/base/Layout.vue'], resolve)
      }, {
        path: 'base-container',
        component: resolve => require(['@/components/base/Container.vue'], resolve)
      },
      {
        path: 'base-button',
        component: resolve => require(['@/components/base/Button.vue'], resolve)
      },
      {
        path: 'base-radio',
        component: resolve => require(['../components/form/Radio.vue'], resolve)
      },
      {
        path: 'base-checkbox',
        component: resolve => require(['../components/form/Checkbox.vue'], resolve)
      },
      {
        path: 'base-input',
        component: resolve => require(['../components/form/Input.vue'], resolve)
      },
      {
        path: 'base-inputnumber',
        component: resolve => require(['../components/form/InputNumber.vue'], resolve)
      },
      {
        path: 'base-select',
        component: resolve => require(['../components/form/Select.vue'], resolve)
      },
      {
        path: 'base-cascader',
        component: resolve => require(['../components/form/Cascader.vue'], resolve)
      }
    ]
  }]
})
