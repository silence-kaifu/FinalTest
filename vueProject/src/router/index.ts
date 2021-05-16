import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue')
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/LoginRegister/loginregister.vue')
  // },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register/register.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/Notfound/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
