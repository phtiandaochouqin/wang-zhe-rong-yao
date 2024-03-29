import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'normalize.css/normalize.css'
import http from './http'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.prototype.$http=http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
