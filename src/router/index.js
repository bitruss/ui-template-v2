import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../pages/auth/SigninPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/auth/RegisterPage.vue')
    },

    {
      path: '/example/form/style1',
      name: 'example_form_style1',
      component: () => import('../pages/example/form/Style1Page.vue')
    },

    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/WelcomePage.vue')
    }
  ]
})

export default router
