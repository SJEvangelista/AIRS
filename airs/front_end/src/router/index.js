import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/main.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signup.vue'),
    },
    {
      path: '/mod-login',
      name: 'mod-login',
      component: () => import('../views/ModeLogin.vue'),
    },
  ],
})

export default router