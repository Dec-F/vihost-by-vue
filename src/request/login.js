import axios from 'axios';
export const loginByEmail = function (data) {
    return axios.post('/login',data)
}

