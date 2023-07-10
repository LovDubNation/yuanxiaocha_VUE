import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'

// 引入重置样式和公共样式
import './assets/css/reset.css'
import './assets/css/common.css'
// 引入字体图标样式
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import dataV from '@jiaminghi/data-view'


Vue.use(dataV);
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
