import axios from 'axios'

export default {
  login(payload) {
    return axios.post('/user/login', payload)
  }
}
