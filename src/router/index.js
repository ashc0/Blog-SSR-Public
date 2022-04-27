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
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    props: true
  },
  {
    path: '/fragment',
    name: 'fragment',
    component: () => import(/* webpackChunkName: "fragment" */ '../views/Fragment.vue')
  }, {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
  }, {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/500',
    name: '500',
    component: () => import(/* webpackChunkName: "500" */ '../views/500.vue')
  }, {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }, {
    path: '*',
    redirect: '/404'
  }
]
function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes
  })
}

export default createRouter
