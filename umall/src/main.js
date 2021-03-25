// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.prototype.$preImg = "http://localhost:3000";
// Vue.prototype.$preImg = "";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
