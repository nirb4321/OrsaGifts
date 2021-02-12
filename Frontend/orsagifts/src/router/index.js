import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/neworder',
    name: 'NewOrder',
    component: () => import('../views/NewOrder.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
