import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '../views/AuthPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/workplace',
      name: 'workplace',
      component: () => import('../views/AppWorkplace.vue')
    }
  ]
})

export default router
