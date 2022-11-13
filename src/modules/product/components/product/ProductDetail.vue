<template>
  <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
      <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
        <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">{{ productName }}</h2>
        <p class="font-normal text-base leading-6 text-gray-600  mt-7" v-html="productDescription"></p>
        <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">{{ productPrice }}</p>

        <div class="lg:mt-11 mt-10">
          <div class="flex flex-row justify-between">
            <p class="font-medium text-base leading-4 text-gray-600 ">Select quantity</p>
            <div class="flex">
              <span
                  class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                  @click="minus()">-</span>
              <input id="counter" v-model="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text"/>
              <span
                  class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1"
                  @click="plus()">+</span>
            </div>
          </div>
        </div>

        <button
            class="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            @click="addToBasket">
          Add to shopping bag
        </button>
      </div>

      <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
        <div class="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
          <img :alt="productName" :src="productCover"/>
        </div>
        <div class="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
          <div v-for="image in productImages" class="bg-gray-100 flex justify-center items-center py-4">
            <img :alt="productName" :src="image.url"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import {ProductSchema} from "../../../../lib/api/product/schemas";
import {useShopStore} from "../../../../lib/store/shop";

const shopStore = useShopStore();

const props = defineProps<{
  productCover: string;
  productImages: []
  productName: string;
  productPrice: string;
  productDescription: string;
  product: ProductSchema
}>();
const addItemToShop = shopStore.addItemToShop
const removeItemFromShop = shopStore.removeItemFromShop

let counter = ref(1);
const plus = () => {
  counter.value = counter.value + 1;
}

const minus = () => {
  counter.value = counter.value - 1;
}
const addToBasket = () => {
  addItemToShop({item: props.product, itemsCount:counter.value})
}

</script>
