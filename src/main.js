import Vue from 'vue'
import router from './router/index';
import Vuex from 'vuex'
// import Mock from 'mockjs';

import Index from './Index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'

import mockState from './mock.json'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(ElementUI)

const store = new Vuex.Store({
  state:mockState,

})

new Vue({
  el:'#app',
  store,
  router,
  template:'<Index/>',
  components:{ Index }
})
