import axios from 'axios';
export const login = function (cb) {
    axios.get('1.1.1.1').then(cb)
}

