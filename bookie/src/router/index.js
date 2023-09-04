import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landing page",
    component: () => import("@/layouts/LandingLayout.vue"),
    children: [
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/AboutPage.vue"),
      },
      {
        path: "/services",
        name: "service",
        component: () => import("@/views/ServicePage.vue"),
      },
      {
        path: "/help",
        name: "help",
        component: () => import("@/views/HelpPage.vue"),
      },
      {
        path: "/pricing",
        name: "pricing",
        component: () => import("@/views/PricingPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
