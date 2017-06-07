import Vue from 'vue'
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  mock
} from './mock'
// import Mock from 'mockjs';
import Index from './App'

import VueProgressBar from 'vue-progressbar'
import ElementUI, {
  Message,
  Progress
} from 'element-ui';
import 'element-ui/lib/theme-default/index.css'


Vue.config.productionTip = false


Vue.use(ElementUI)

Vue.use(VueProgressBar, {
  color: '#13CE66',
  failedColor: 'red',
  thickness: '5px'
})
router.beforeEach((to, from, next) => {
  if (!store.state.userToken) {
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  } else if (!store.state.userInfo.name) {
    store.dispatch('getInfo', store.state.userToken).then(() => {
      next()
    });
  } else {
    next()
  }

})
router.afterEach(route => {})

const vm = new Vue({
  el: '#app',
  store,
  router,
  template: '<Index/>',
  components: {
    Index
  }
})


mock()
