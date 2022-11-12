import type {Module} from "../../lib/modules";

const product: Module = {
    routes: [
        {
            path: "/",
            component: () => import("@/modules/product/views/Products.vue"),
            children: [
                {
                    name: "products",
                    path: "",
                    component: () =>
                        import("@/modules/product/views/ProductsIndex.vue"),
                },
                {
                    path: "/product/:id",
                    name: "product",
                    component: () => import("@/modules/product/views/ProductIndex.vue"),
                },
            ],
        },

    ],
};

export default product;
