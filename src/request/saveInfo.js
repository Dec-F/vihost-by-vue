import axios from 'axios';

export default function (data, token) {
  return axios.post('/saveInfo', data, token)
}
