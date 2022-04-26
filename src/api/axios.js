import axios from 'axios'
// import { getItem } from '../utils/localStorage'
// import createRouter from '../router'
// const router = createRouter()
const axiosInstance = axios.create({
  // baseURL: 'https://blog-backend-1688692-1302804299.ap-shanghai.run.tcloudbase.com/api',
  baseURL: 'https://test-1785248-1302804271.ap-shanghai.run.tcloudbase.com/api',
  // baseURL: 'http://localhost:3000/api',
  timeout: 3000
})

// 如果 token 存在，则自动带上 token
// if (window ? getItem('token') : null) {
//   axios.defaults.headers.common['Authorization'] = `Bearer ` + window.localStorage.getItem('token')
// }

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      // switch (error.response.status) {
      //   case 401:
          // router.replace({
          //   path: 'login',
          //   query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          // })
      // }
    }
    return Promise.reject(error.response)
  }
)



export default axiosInstance