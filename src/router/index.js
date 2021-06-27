import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/polls',
    name: 'polls',
    component: () => import('@/views/polls')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/users')
  },
  {
    path: '/black_lists',
    name: 'black_lists',
    component: () => import('@/views/black_lists_page')
  },
  {
    path: '/call_center',
    name: 'call_center',
    component: () => import('@/views/call_center')
  },
  {
    path: '/polls/create_poll',
    name: '/polls/create_poll',
    component: () => import('@/views/create_poll')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
