
import * as types  from '../mutation-types';
const state = {
        "account": "cpij",
        "phone": 6751634664062830,
        "email": "p.cmbgc@enutxort.mz",
        "name": "曹平",
        "company": "灵猫",
        "prefecture": ["130000", "130300", "130304"]
}

const mutations= {
    save_userInformation(state,s){
        state.prefecture=s
    }
}
export default {
    state,
    mutations
}

