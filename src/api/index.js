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

const getArticle = filter => axiosInstance({
  url: '/article/getarticle',
  method: 'GET',
  params: filter
})

export default {
  login,
  getArticleById,
  getArticle
}