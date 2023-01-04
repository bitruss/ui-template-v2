var auth_router = [
  {
    path: "/signin",
    name: "signin",
    component: () => import("../../pages/auth/SigninPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../../pages/auth/RegisterPage.vue"),
  },
];

export default auth_router
