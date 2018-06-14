import Vue from 'vue'
import App from './App'
import router from './router'
import './elementUi/index.js'
import './style/base.css'
import './assets/icon/iconfont.css'
import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
