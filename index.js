import { createRouter, createwebHistory } from "vue-router";

const router = createRouter({
  history: createwebHistory(import.meta.env.BASE_URL),
  routers: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },

    {
      path: "/",
      name: "about",
      component: () => import("../views/About.vue"),
    },
  ],
});

export default router;

