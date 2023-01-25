<script>
import { createRouter, createWebHistory } from "vue-router";
import index_router from "./configs/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: index_router,
});

export default router;
</script>
