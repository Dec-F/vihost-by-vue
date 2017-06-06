import axios from 'axios';
import loginByEmail from 'req/login';
import getInfo from 'req/getInfo';
import saveInfo from 'req/saveInfo'
export default {

  login({
    commit
  }, formData) {
    return loginByEmail(formData).then((res) => {
      commit('login', res.data)
    })
  },
  getInfo({
    commit
  }, token) {
    return getInfo(token).then((res) => {
      commit('get_info', res.data)
    })
  },
  saveInfo({
    commit
  }, formData, token) {
    return saveInfo(formData, token).then(() => {
      commit('save_info', formData)
    })
  }
}
