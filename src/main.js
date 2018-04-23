// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
/*import mintUI from 'mint-ui'*/
import 'mint-ui/lib/button/style.css'
import '../static/style/common.css'
import '../static/fonts/iconfont.css'
Vue.use(VueResource);
/*Vue.config.productionTip = false*/
/*Vue.use(mintUI)*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
