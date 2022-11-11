import type { Module } from "../../lib/modules";

const module: Module = {
  routes: [
    {
      path: "/dashboard",
      component: () => import("@/modules/dashboard/views/Dashboard.vue"),
      children: [
        {
          name: "dashboard",
          path: "",
          component: () =>
            import("@/modules/dashboard/views/DashboardIndex.vue"),
        },
      ],
    },
    {
      path: "/home",
      component: () => import("@/modules/dashboard/views/Home.vue"),
      children: [
        {
          name: "home",
          path: "",
          component: () =>
            import("@/modules/dashboard/views/HomeIndex.vue"),
        },
      ],
    },
  ],
};

export default module;
