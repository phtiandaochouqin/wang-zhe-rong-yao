import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/style.scss'
import 'normalize.css/normalize.css'
import axios from 'axios'
// import style (>= Swiper 6.x)


Vue.prototype.$http= axios.create({
  baseURL:'http://localhost:3001/web/api',

})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
