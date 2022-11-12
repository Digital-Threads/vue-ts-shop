import {defineStore} from "pinia";
import {fetchProducts} from "../api/product";
import {ProductSchema, ProductsSchema} from "../api/product/schemas";

interface RootState {
    selectedProduct: ProductSchema | null,
    productsList: Array<ProductSchema>,
    productsMeta: {
        limit: number,
        offset: number,
        total: number,
        count: number
    }
}

export const useProductStore = defineStore("productStore", {
    state: () => ({
        selectedProduct: {} as ProductSchema | null,
        productsList: [] as Array<ProductSchema>,
        productsMeta: {
            limit: 100 as number,
            offset: 0 as number,
            total: 0 as number,
            count: 0 as number
        }
    } as RootState),
    getters: {
        getProductList: state=> state.productsList
    },
    actions: {
        async fetchProducts(): Promise<void> {
            const productsList: ProductsSchema = await fetchProducts()

            this.productsList = productsList.items
            console.log('Product list ::::', this.productsList)
            this.productsMeta.limit = productsList.limit
            this.productsMeta.offset = productsList.offset
            this.productsMeta.total = productsList.total
            this.productsMeta.count = productsList.count

        },
    }
});
