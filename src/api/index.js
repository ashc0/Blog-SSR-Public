import axiosInstance from './axios'

const login = function (user) {
  return axiosInstance('/login', {
    method: 'POST',
    data: {
      user
    }
  })
}

const getArticleById = id => axiosInstance.get('/article/getbyid' + '/' + id)

export default {
  login,
  getArticleById
}