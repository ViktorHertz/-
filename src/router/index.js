import { createRouter, createWebHistory } from 'vue-router'
import B_Is from '../views/B-Is.vue'
const B_IM = () => import('../views/B-IM')
const B_x = () => import('../views/B-x')
const Is_Uσ = () => import('../views/Is-Uσ')
const routes = [
  {
    path: '/',
    name: 'B-Is',
    component: B_Is
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/B-IM',
    component: B_IM
  },
  {
    path: '/B-x',
    component: B_x
  },
  {
    path: '/Is-Uσ',
    component: Is_Uσ
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
