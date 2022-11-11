import type { Module } from "../../lib/modules";

const basket: Module = {
  routes: [
    {
      path: "/basket",
      component: () => import("@/modules/basket/views/Basket.vue"),
      children: [
        {
          name: "basket",
          path: "",
          component: () =>
            import("@/modules/basket/views/BasketIndex.vue"),
        },
      ],
    },
  ],
};

export default basket;
