import Vue from 'vue'
import router from './router';
import store from './store';
// import Mock from 'mockjs';

import Index from './Index'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'


Vue.config.productionTip = false


Vue.use(ElementUI)



new Vue({
  el:'#app',
  store,
  router,
  template:'<Index/>',
  components:{ Index }
})
