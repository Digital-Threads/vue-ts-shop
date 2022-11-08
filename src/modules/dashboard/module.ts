import type { Module } from "@/lib/modules";

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
  ],
};

export default module;
