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
    {
      path: "/products",
      component: () => import("@/modules/dashboard/views/Products.vue"),
      children: [
        {
          name: "products",
          path: "",
          component: () =>
            import("@/modules/dashboard/views/ProductsIndex.vue"),
        },
      ],
    },
    {
      path: "/product",
      component: () => import("@/modules/dashboard/views/Product.vue"),
      children: [
        {
          name: "product",
          path: "",
          component: () =>
            import("@/modules/dashboard/views/ProductIndex.vue"),
        },
      ],
    },
    {
      path: "/basket",
      component: () => import("@/modules/dashboard/views/Basket.vue"),
      children: [
        {
          name: "basket",
          path: "",
          component: () =>
            import("@/modules/dashboard/views/BasketIndex.vue"),
        },
      ],
    },
  ],
};

export default module;
