import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'YOUR_BACKEND_URL',
  timeout: 5000
})

export default axiosInstance