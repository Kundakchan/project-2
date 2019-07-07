import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import normalaze from 'normalize.css'
import style from './style/main.scss'

Vue.config.productionTip = false

Vue.use([
  normalaze,
  style
])

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
