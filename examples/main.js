import Vue from 'vue'
import App from './App.vue'
import RMVUI from '../packages/index'

Vue.use(RMVUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
