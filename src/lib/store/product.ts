import {defineStore} from "pinia";
import {fetchProducts} from "../api/product";
import {Product} from "../../modules/product/schema/productSchema";

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
        async fetchProducts(): Promise<Product[]> {
            this.productsList = await fetchProducts()
            return this.productsList
        },
    }
});
