import axios from 'axios';
export default{
    login ({commit,state},formData){
        return axios.post('1.1.1.1',formData).then((res) => {
            commit('login',res.data)
        })
    }
}