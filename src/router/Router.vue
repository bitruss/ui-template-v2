<script>
import { createRouter, createWebHistory } from "vue-router";

import example_router from "./configs/example";
import auth_router from "./configs/auth.js";
import main_router from "./configs/main.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...main_router, ...example_router, ...auth_router],
});

export default router;
</script>
