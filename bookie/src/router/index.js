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
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/Auth/LoginPage.vue"),
        meta: {
          pageTitle: "login",
        },
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/views/Auth/RegisterPage.vue"),
        meta: {
          pageTitle: "register",
        },
      },
      // C:\Users\user\Downloads\school IBL\software_dev_lab\software-dev-lab\bookie\src\views/Auth/Category/Clientpage.vue
      {
        path: "IsAClientProffesional",
        name: "IsAClientProffesional",
        component: () => import("@/views/Auth/IsAClientProffesional.vue"),
        meta: {
          pageTitle: "Category",
        },
      },
      {
        path: "IsAClient",
        name: "IsAClient",
        component: () => import("@/views/Auth/Category/ClientPage.vue"),
        meta: {
          pageTitle: "Clie",
        },
      },
      {
        path: "IsAProffesional",
        name: "IsAProffesional",
        component: () => import("@/views/Auth/Category/ProffesionalPage.vue"),
        meta: {
          pageTitle: "Proffesional",
        },
      },
    ],
  },
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "System Page" */ "@/layouts/SystemLayout.vue"
      ),
    children: [
      {
        path: "/404",
        name: "404",
        component: () =>
          import(/* webpackChunkName: "error page" */ "@/views/FourO4Page.vue"),
        meta: {
          pageTitle: "404",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
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
