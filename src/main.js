import Vue from 'vue'
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {mock} from './mock'
// import Mock from 'mockjs';

import Index from './App'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'


Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(VueAxios,axios)




new Vue({
  el:'#app',
  store,
  router,
  template:'<Index/>',
  components:{ Index }
})
mock()