import axios from 'axios';
export default function (data) {
    return axios.post('/login',data)
}

