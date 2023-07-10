import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

// 引入重置样式和公共样式
import './assets/css/reset.css'
import './assets/css/common.css'
// 引入字体图标样式
import './assets/font/iconfont.css'
// 引入element-ui的样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(dataV)
// 将axios挂载在vue的原型上,这样在其他的vue组件页面,我们就可以通过 this.$axios 来调用axios的方法
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
