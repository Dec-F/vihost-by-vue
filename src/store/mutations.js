import {LOGIN} from './mutation-types';


export default {
    [LOGIN](state,data){
        console.log(1);
        state = Object.assign(state,data)
    }
}