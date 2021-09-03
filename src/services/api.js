import  axios from 'axios'
import {server} from '../common'
const api = axios.create({
    baseURL : server
});

api.defaults.headers.post['Content-Type'] = 'application/json';





export default api