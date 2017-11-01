// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import webStorage from './utils/storage'
import httpRequest from './utils/request'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = httpRequest
Vue.prototype.$storage = webStorage

// 注册storage, 形式：DOCUMENT-CODE
webStorage.injection('CODE')
webStorage.injection('USER')

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
