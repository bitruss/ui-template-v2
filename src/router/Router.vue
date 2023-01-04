<script>
import { createRouter, createWebHistory } from 'vue-router'
import auth_router from './configs/auth.js';
import index_router from './configs/index.js';
import example_router from './configs/example'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:  [...index_router,...example_router,...auth_router]  
})

export default router
</script>
