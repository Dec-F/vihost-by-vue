import axios from 'axios';

export default {
    getMenu: function (token) {
        return axios.get('/reply', token)
    },
    saveMenu: function(token) {
        return axios.post('/reply',token)
    }
}