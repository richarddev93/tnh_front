import  axios from 'axios'
import {server} from '../common'
const api = axios.create({
    baseURL : server
})


export default api