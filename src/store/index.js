import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function createStore(){
  return new Vuex.Store({
    state: {
      arr: [
        {
          src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd.zdqx.com%2Fyourname_20190529%2F013.jpg&refer=http%3A%2F%2Fd.zdqx.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653130133&t=fc6164da5610222823d71d67f1d0d4b6",
          title: "但愿人长久，千里共婵娟",
        },
        {
          src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013deb5664e6a232f87545732e5b44.jpg%403000w_1l_0o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653129946&t=5e98e45a48f2e6bae25aeb4720eb26ad",
          title: "每一天望海，每一天相对",
        },
      ],
    },
    getters: {
      context(state) {
        return state.arr[Math.floor(Math.random() * state.arr.length)];
      }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
  })
}

export default createStore

