import axios from 'axios'
// import { getItem } from '../utils/localStorage'
// import createRouter from '../router'
// const router = createRouter()
const axiosInstance = axios.create({
  baseURL: 'https://blog-backend-1688692-1302804299.ap-shanghai.run.tcloudbase.com/api',
  // baseURL: 'https://test-1785248-1302804271.ap-shanghai.run.tcloudbase.com/api',
  // baseURL: 'http://localhost:3000/api',
  timeout: 5000
})

// 如果 token 存在，则自动带上 token
// if (window ? getItem('token') : null) {
//   axios.defaults.headers.common['Authorization'] = `Bearer ` + window.localStorage.getItem('token')
// }
export default axiosInstance