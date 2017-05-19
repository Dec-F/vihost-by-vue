import types from './mutation-types';
import Cookie from 'js-cookie'

export default {
    [types.LOGIN](state,data){
        state = Object.assign(state,data);
        Cookie.set('User-Token',state.userToken)
    },
    [types.SET_COOKIE](state,data){
        state.UserCookie=data
    }
}