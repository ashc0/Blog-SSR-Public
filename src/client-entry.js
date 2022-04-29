import Vue from 'vue';
import createApp from './app';
import api from './api'
Vue.prototype.$api = api

Vue.config.productionTip = false

const { app, router } = createApp();

Vue.prototype.$api.axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error && error.response) {
            if (error.response.status == 404) router.replace({ name: '404' })
            else if (error.response.status >= 400) router.replace({ name: 'error', query: { msg: error.response.data.error.msg, status: error.response.status } })
        }
        return Promise.reject(error.response)
    }
)

router.onReady(() => {
    app.$mount('#app', true);
});

