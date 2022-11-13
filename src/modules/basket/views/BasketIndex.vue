<template>
  <div id="cart" class=" w-full flex items-end lg:flex-row flex-col justify-end">
    <basket-items-container :shop-items="shopStore.getShopItems"  @removeShopItem="removeShopItem"></basket-items-container>
    <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 h-full">
      <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
        <div>
          <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800">Summary</p>
          <div class="flex items-center justify-between pt-16">
            <p class="text-base leading-none text-gray-800">Subtotal</p>
            <p class="text-base leading-none text-gray-800">$9,000</p>
          </div>
          <div class="flex items-center justify-between pt-5">
            <p class="text-base leading-none text-gray-800">Shipping</p>
            <p class="text-base leading-none text-gray-800">$30</p>
          </div>
          <div class="flex items-center justify-between pt-5">
            <p class="text-base leading-none text-gray-800">Tax</p>
            <p class="text-base leading-none text-gray-800">$35</p>
          </div>
        </div>
        <div>
          <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
            <p class="text-2xl leading-normal text-gray-800">Total</p>
            <p class="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
          </div>
          <button class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                  onclick="checkoutHandler1(true)">Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useShopStore} from "../../../lib/store/shop";
import BasketItemsContainer from "../components/BasketItemsContainer.vue";

const shopStore = useShopStore();
const removeItemFromStore = shopStore.removeItemFromShop
const removeShopItem = (productId:number):void =>{
  // console.log('Product ID :::::', productId)
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

