import axios from 'axios'

export default {
  login(data) {
    return axios.post('/user/login', {
      email: data.email,
      password: data.password
    })
  },

  register(data) {
    return axios.post('/user/register', {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      username: data.userName
    })
  },

  verify(email) {
    return axios.post('/user/send_verification', email)
  },

  recovery(email) {
    return axios.post('/user/recovery', email)
  },

  reset(payload) {
    return axios.post('/user/reset_password', payload)
  },

  updatePassword(payload) {
    return axios.post('/user/update_password', payload)
  }
}
