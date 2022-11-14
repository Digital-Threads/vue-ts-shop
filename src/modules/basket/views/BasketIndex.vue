<template>
  <div id="cart" class=" w-full flex items-end lg:flex-row flex-col justify-end">
    <basket-items-container :shop-items="shopStore.getShopItems" @removeShopItem="removeShopItem"></basket-items-container>
    <basket-summary :shop-total-price="totalPrice"></basket-summary>
  </div>
</template>

<script lang="ts" setup>
import {useShopStore} from "../../../lib/store/shop";
import BasketItemsContainer from "../components/BasketItemsContainer.vue";
import BasketSummary from "../components/BasketSummary.vue";
import {computed} from "@vue/reactivity";

const shopStore = useShopStore();
const removeItemFromStore = shopStore.removeItemFromShop
const totalPrice = computed(() => {

  return Object.keys(shopStore.getShopItems).reduce((previousValue, currentValue) => {
    console.log('COMPUTED:::::', previousValue)

    return previousValue += shopStore.getShopItems[currentValue].itemsSum
  }, 0)
})
const removeShopItem = (productId: number): void => {
  removeItemFromStore(productId)
}
</script>

<style>
/* width */

#scroll::-webkit-scrollbar {
  width: 1px;
}

/* Track */

#scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */

#scroll::-webkit-scrollbar-thumb {
  background: rgb(133, 132, 132);
}
</style>

