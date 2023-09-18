import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landing page",
    component: () => import("@/layouts/LandingLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "Home Page" */ "@/views/HomePage.vue"),
        meta: {
          pageTitle: "Home",
        },
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "About Page" */ "@/views/AboutPage.vue"),
        meta: {
          pageTitle: "About",
        },
      },
      {
        path: "/services",
        name: "service",
        component: () =>
          import(
            /* webpackChunkName: "Service Page" */ "@/views/ServicePage.vue"
          ),
        meta: {
          pageTitle: "Service",
        },
      },
      {
        path: "/help",
        name: "help",
        component: () =>
          import(/* webpackChunkName: "help Page" */ "@/views/HelpPage.vue"),
        meta: {
          pageTitle: "Help",
        },
      },
      {
        path: "/pricing",
        name: "pricing",
        component: () =>
          import(/* webpackChunkName: "Home Page" */ "@/views/PricingPage.vue"),
        meta: {
          pageTitle: "Pricing",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  // current page view title
  document.title = `${to.meta.pageTitle} - Bookie`;
});
export default router;
