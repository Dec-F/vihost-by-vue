import Vuex from 'vuex'
import Vue from 'vue';
import mockState from '.././mock.json'
import edictID from './modules/edictID';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  // modules:{
  //     userAndPassword:edictID
  // },
  actions:actions,
  mutations,
  getters:{
    name(state){
      return state.userAndPassword.name
    },
    account(state){
      return state.userAndPassword.account
    },
    phone(state){
      return state.userAndPassword.phone
    }
  }

})