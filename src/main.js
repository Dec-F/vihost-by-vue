// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css';
import MsgManagement from './components/MsgManagement'
import ElementUi from 'element-ui';
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUi)

new Vue({
  el: '#app',
  // router,
  template: '<MsgManagement/>',
  components: { MsgManagement }
});

