import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => require(['@/pages/home/index.vue'], resolve)
    },
    {
      path: '/list',
      name: 'List',
      component: (resolve) => require(['@/pages/list/index.vue'], resolve)
    },
    {
      path: '/detail',
      name: 'Detail',
      component: (resolve) => require(['@/pages/detail/index.vue'], resolve)
    },
    {
      path: '/sigin',
      name: 'Sigin',
      component: (resolve) => require(['@/pages/sigin/index.vue'], resolve)
    },
    {
      path: '/pointpool',
      name: 'Pointpool',
      component: (resolve) => require(['@/pages/pointpool/index.vue'], resolve)
    },
    {
      path: '/order',
      name: 'Order',
      component: (resolve) => require(['@/pages/order/index.vue'], resolve)
    },
    {
      path: '/submitsuccess',
      name: 'Submitsuccess',
      component: (resolve) => require(['@/pages/submitsuccess/index.vue'], resolve)
    },
    {
      path: '/orderlist',
      name: 'Orderlist',
      component: (resolve) => require(['@/pages/orderlist/index.vue'], resolve)
    },
    {
      path: '/orderdetail',
      name: 'Orderdetail',
      component: (resolve) => require(['@/pages/orderdetail/index.vue'], resolve)
    }
  ]
})
