import types from './mutation-types';
import Cookie from 'js-cookie'

export default {
  [types.LOGIN](state, data) {
      state.userToken=data.userToken
    Cookie.set('User-Token', state.userToken)
  },
  [types.SET_COOKIE](state, data) {
    state.UserCookie = data
  },
  [types.GET_INFO](state, data) {
    state = Object.assign(state, data)
  }
}
