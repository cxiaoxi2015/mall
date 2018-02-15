import Vue from 'vue'
import App from './App'
//引入路由
import router from './router'
//引入Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入jquery
import $ from 'jquery';   
window.$ = $;
//引入mallUtils工具文件
const mallUtil = require('../build/mallUtils')
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.mallUtil = mallUtil


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
