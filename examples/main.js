import Vue from 'vue'
import App from './App.vue'
import router from './router'

import previewImg from '../packages/index'
Vue.use(previewImg)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
