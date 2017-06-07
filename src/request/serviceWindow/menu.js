import axios from 'axios';

export default {
    getMenu: function (token) {
        return axios.get('/menuManagement', token)
    },
    saveMenu: function(token) {
        return axios.post('/menuManagement',token)
    }
}