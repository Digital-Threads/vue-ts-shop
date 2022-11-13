import {defineStore} from "pinia";
import {fetchProductById, fetchProducts} from "../api/product";
import {ProductSchema, ProductsSchema} from "../api/product/schemas";
import {useLocalStorage} from '@vueuse/core'

const shopStorage = useLocalStorage('shop', {items: <ProductSchema[]>[]})

interface RootState {
    basketItems: Array<ProductSchema>,
}

export const useShopStore = defineStore("shopStore", {
    state: () => ({
        basketItems: shopStorage.value.items,
    } as RootState),
    getters: {
        getShopItems: state => state.basketItems,
        getShopItemsCount: state => state.basketItems.length,
    },
    actions: {
        addItemToShop(item: ProductSchema): void {
            shopStorage.value.items.push(item)
        },
        removeItemFromShop(itemId: number): void {
            let index = shopStorage.value.items.findIndex(item => item.id === itemId)
            if (index !== -1) {
                shopStorage.value.items.splice(index, 1)
            }
        },

    }
});
