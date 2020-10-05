import axios from 'axios'

export default {
  login(payload) {
    return axios.post('/admin/login', payload)
  },

  getCategories() {
    return axios.get('admin/category')
  },

  addCategory(data) {
    return axios.post('/admin/category', {
      name: data.name,
      price: data.price
    })
  },

  getCategory(id) {
    return axios.get(`/admin/category/${id}`)
  },

  updateCategory(data) {
    return axios.patch('/admin/category', {
      id: data.id,
      name: data.name,
      price: data.price
    })
  },

  deleteCategory(id) {
    return axios.delete('/admin/category', {
      data: {
        id
      }
    })
  },

  getStages(categoryId) {
    return axios.get(`/admin/category/${categoryId}/stages`)
  },

  addStage(data) {
    return axios.post('/admin/stages', {
      name: data.name,
      prevStageId: data.prevStageId,
      categoryId: data.categoryId,
      pass: data.passmark,
      duration: data.duration
    })
  },

  getStage(data) {
    return axios.get(`/admin/category/${data.categoryId}/stages/${data._id}`)
  },

  deleteStage(id) {
    return axios.delete('/admin/stages', {
      data: {
        stageId: id
      }
    })
  },

  updateStage(data) {
    return axios.patch('/admin/stages', {
      name: data.name,
      pass: data.pass,
      duration: data.duration,
      prevStageId: data.prevStageId,
      categoryId: data.categoryId,
      stageId: data._id
    })
  }
}
