import Vue from 'vue'
import router from './router/index';
// import Vuex from 'vuex'

import Index from './Index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

// Vue.use(Vuex)

Vue.use(ElementUI)



new Vue({
  el:'#app',
  // store,
  router,
  template:'<Index/>',
  components:{ Index }
})
