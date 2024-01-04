import axios from 'axios'

export default axios.create({
    baseURL:'http://localhost:3700',
    headers: {
        Authorization:localStorage.getItem('token')
    }
})