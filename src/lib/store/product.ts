import {defineStore} from "pinia";
import {fetchProductById, fetchProducts} from "../api/product";
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
        selectedProduct: null,
        productsList: [],
        productsMeta: {
            limit: 100,
            offset: 0,
            total: 0,
            count: 0
        }
    } as RootState),
    getters: {
        getProductList: state => state.productsList
    },
    actions: {
        async fetchProducts(): Promise<void> {
            const productsList: ProductsSchema = await fetchProducts()

            this.productsList = productsList.items
            console.log('This product List Store::::', this.productsList)
            this.productsMeta.limit = productsList.limit
            this.productsMeta.offset = productsList.offset
            this.productsMeta.total = productsList.total
            this.productsMeta.count = productsList.count
        },

        async fetchProductById(productId: number): Promise<ProductSchema> {
            return await fetchProductById(productId)
        }
    }
});
