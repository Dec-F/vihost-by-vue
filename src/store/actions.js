import axios from 'axios';
import {loginByEmail} from 'req/login';
import {getInfo} from 'req/getInfo';
export default{
    login ({commit},formData){
        loginByEmail(formData).then((res)=>{
            commit('login',res.data)
        })
    },
    getInfo({commit},token){
        getInfo(token).then((res)=>{
            commit('getInfo',res.data)
        })
    }
}