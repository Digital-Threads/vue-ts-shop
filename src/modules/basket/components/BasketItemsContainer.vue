<template>
  <div id="scroll" class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-auto overflow-x-hidden lg:h-screen h-auto">
    <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 pt-3">Bag</p>

    <basket-item-card v-for="key in Object.keys(shopItems)"
                      :items-count="shopItems[key].itemsCount"
                      :product-cover="shopItems[key].item.imageUrl"
                      :product-id="shopItems[key].item.id"
                      :product-name="shopItems[key].item.name"
                      :product-price="shopItems[key].item.defaultDisplayedPriceFormatted"
                      @removeShopItem="removeShopItem"
    ></basket-item-card>
  </div>

</template>

<script lang="ts" setup>

import {ProductSchema} from "../../../lib/api/product/schemas";
import BasketItemCard from "./BasketItemCard.vue";

const emit = defineEmits(['removeShopItem'])


const props = defineProps<{
  shopItems: { item: ProductSchema, itemsCount: number }
}>()

const removeShopItem = (productId: number): void => {
  emit('removeShopItem', productId)

}
</script>

<style scoped>

</style>