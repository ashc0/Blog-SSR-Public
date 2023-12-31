import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
// import api from './api'
import './style/reset.css'

Vue.config.productionTip = false

// Vue.prototype.$api = api 

function createApp(context) {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    context,
    render: h => h(App)
  })

  return { app, router, store }
}

export default createApp