import Vuex from 'vuex'
import Vue from 'vue';
import mockState from '.././mock.json'
import edictID from './modules/edictID';
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
      userAndPassword:edictID
  }

})