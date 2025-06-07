import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/pages/Dashboard.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/auth/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("@/pages/auth/Register.vue"),
    },
  ],
});

export default router;
