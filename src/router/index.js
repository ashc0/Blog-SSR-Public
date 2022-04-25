import Vue from 'vue'
import VueRouter from 'vue-router'
import Cover from '../views/Cover.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cover',
    component: Cover
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]
function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes
  })
}

export default createRouter
