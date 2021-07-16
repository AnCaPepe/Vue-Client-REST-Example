import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('@/views/Students.vue')
  },
  {
    path: '/professors',
    name: 'Professors',
    component: () => import('@/views/Professors.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/views/Courses.vue')
  },
  {
    path: '/students/:id',
    name: 'StudentDetail',
    component: () => import('@/views/StudentDetail.vue')
  },
  {
    path: '/professors/:id',
    name: 'ProfessorDetail',
    component: () => import('@/views/ProfessorDetail.vue')
  },
  {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: () => import('@/views/CourseDetail.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

export default new VueRouter({
  routes
})
