// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'vue-awesome/icons';
import MsgManagement from './components/MsgManagement'
// import Icon from 'vue-awesome/components/Icon';
Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.component('icon',Icon)

new Vue({
  el: '#app',
  router,
  template: '<MsgManagement/>',
  components: { MsgManagement }
});

