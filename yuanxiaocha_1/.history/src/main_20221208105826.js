import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入重置样式和公共样式
import './assets/css/reset.css'
import './assets/css/common.css'
// 引入字体图标样式
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
