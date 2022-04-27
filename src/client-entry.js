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
            // switch (error.response.status) {
            //   case 401:
            // router.replace({
            //   path: 'login',
            //   query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            // })
            // }
            switch (error.response.status) {
                case 500:
                    router.replace({ name: '500', query: { msg: error.response.data.error.msg } })
                    break
                case 404:
                    router.replace({ name: '404' })
                    break
            }

        }
        return Promise.reject(error.response)
    }
)

// if (window.__INITIAL_STATE__) {
//     store.replaceState(window.__INITIAL_STATE__);
// }

router.onReady(() => {
    app.$mount('#app', true);
});

