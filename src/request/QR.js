import axios from 'axios';


export const getQR = function(token) {
    return axios.get('/qr',token)
}

export const getNewQR = function(token) {
    return axios.get('/newqr',token)
}
