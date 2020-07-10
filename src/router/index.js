import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Students from '@/views/Students'
import Teachers from '@/views/Teachers'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/students',
    name: 'Students',
    component: Students,
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
