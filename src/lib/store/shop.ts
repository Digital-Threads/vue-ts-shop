import {defineStore} from "pinia";
import {fetchProductById, fetchProducts} from "../api/product";
import {ProductSchema, ProductsSchema} from "../api/product/schemas";
import {useLocalStorage} from '@vueuse/core'

interface shopItemsType {
    item: ProductSchema;
    itemsCount: number
}

interface shopType {
    totalCount: number

    [key: number]: shopItemsType;
}

const shopStorage = useLocalStorage('shop', {items: {} as shopType, totalCount: 0 as number})

interface RootState {
    basketItems: shopType,
    totalCount: number
}

export const useShopStore = defineStore("shopStore", {
    state: () => ({
        basketItems: shopStorage.value.items,
        totalCount: shopStorage.value.totalCount
    } as RootState),
    getters: {
        getShopItems: state => state.basketItems,
        getShopItemsCount: state => state.totalCount,
    },
    actions: {
        addItemToShop(shopItem: ProductSchema, count = 1): void {
            shopStorage.value.items[shopItem.id] = {item: shopItem, itemsCount: count}
            shopStorage.value.totalCount += count
            this.basketItems[shopItem.id] = {item: shopItem, itemsCount: count}
            this.totalCount += count
        },
        removeItemFromShop(itemId: number): void {
            const count = shopStorage.value.items[itemId].itemsCount
            delete shopStorage.value.items[itemId]
            shopStorage.value.totalCount -= count
            // shopStorage.value.itemsCount--
        },

    }
});
