import {defineStore} from "pinia";
import {fetchProducts} from "../api/product";

export const useProductStore = defineStore("productStore", {
    state: () => ({
        selectedProduct: null,
        productsList: [],
        productsMeta: {
            limit: 100,
            offset: 0,
            total: 9,
            count: 0
        }
    }),
    getters: {},
    actions: {
        async fetchProducts() {
            this.productsList = await fetchProducts()
        },
    }
});
