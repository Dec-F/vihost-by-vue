import axios from 'axios';
import {loginByEmail} from '../resquest/login';
export default{
    login ({commit},formData){
        loginByEmail(formData).then((res)=>{
            commit('login',res.data)
        })
    }
}