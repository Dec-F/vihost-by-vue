import Vue from 'vue'
import router from './router/index';
// import Vuex from 'vuex'
// import App from './App'
import Index from './Index'
// import  MainContent  from './components/Main';
// import { Button, Collapse, Menu,MenuItem,Submenu } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
// Vue.use(Vuex);
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
// Vue.use(Vuex)
// Vue.use(Button)
// Vue.use(Collapse)
// Vue.use(Menu)
// Vue.use(MenuItem)
// Vue.use(Submenu)
Vue.use(ElementUI)



new Vue({
  el:'#app',
  // store,
  router,
  // render:h=>h(Index),
  template:'<Index/>',
  components:{ Index }
})
