import axiosInstance from './axios'

const login = function (user) {
  return axiosInstance('/login', {
    method: 'POST',
    data: {
      user
    }
  })
}

export default {
  login
}