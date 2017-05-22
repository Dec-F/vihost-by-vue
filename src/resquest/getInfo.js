import axios from 'axios';

export const getInfo = function(token) {
    return axios.get('/getInfo',token)
}