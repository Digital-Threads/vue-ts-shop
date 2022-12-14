import {defineStore} from "pinia";
import {fetchProductById, fetchProducts} from "../api/product";
import {ProductSchema, ProductsSchema} from "../api/product/schemas";
import {useLocalStorage} from '@vueuse/core'

interface shopItemsType {
    item: ProductSchema;
    itemsCount: number
    itemsSum: number
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
        addItemToShop(shopItem: { item: ProductSchema, itemsCount: number }): void {
            const itemsSum = shopItem.itemsCount * shopItem.item.price
            if (shopStorage.value.items[shopItem.item.id]) {

                shopStorage.value.items[shopItem.item.id].itemsCount += shopItem.itemsCount
                shopStorage.value.items[shopItem.item.id].itemsSum += itemsSum
            } else {
                shopStorage.value.items[shopItem.item.id] = {...shopItem, 'itemsSum': itemsSum}
            }

            shopStorage.value.totalCount += shopItem.itemsCount

            this.basketItems = shopStorage.value.items
            this.totalCount = shopStorage.value.totalCount
        },
        removeItemFromShop(itemId: number): void {
            const count = shopStorage.value.items[itemId].itemsCount
            delete shopStorage.value.items[itemId]
            shopStorage.value.totalCount -= count

            this.basketItems = shopStorage.value.items
            this.totalCount = shopStorage.value.totalCount
            // shopStorage.value.itemsCount--
        },

    }
});
