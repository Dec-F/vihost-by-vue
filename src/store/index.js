import Vuex from 'vuex'
import Vue from 'vue';
import mockState from '.././mock.json'
import actions from './actions';
import mutations from './mutations';
import Cookie from 'js-cookie';


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userToken: Cookie.get('User-Token'),
    userInfo: {
      name: '',
      avatar: '',
      email: '',
      account: '',
      phone: '',
      company: '',
      area: [],
    }

  },
  actions: actions,
  mutations,
  getters: {
    // name(state){
    //   return state.userAndPassword.name
    // },
    // account(state){
    //   return state.userAndPassword.account
    // },
    // phone(state){
    //   return state.userAndPassword.phone
    // }
  }

})
