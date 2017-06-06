import axios from 'axios';

export default function (token) {
  return axios.get('/getInfo', token)
}
