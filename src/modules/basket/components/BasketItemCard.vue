<template>
  <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
    <div class="md:w-4/12 2xl:w-1/4 w-full">
      <img :alt="productName" :src="productCover" class="h-full object-center object-cover md:block hidden"/>
      <img :alt="productName" :src="productCover" class="md:hidden w-full h-full object-center object-cover"/>
    </div>
    <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
      <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF{{ productId }}</p>
      <div class="flex items-center justify-between w-full pt-1">
        <p class="text-base font-black leading-none text-gray-800">{{ productName }}</p>
        <p class="text-base font-medium text-black"> {{ itemsCount }}</p>
      </div>
      <p class="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
      <p class="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
      <p class="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
      <div class="flex items-center justify-between pt-5">
        <div class="flex itemms-center">
          <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" @click="removeItemFromShopCard(productId)">Remove</p>
        </div>
        <p class="text-base font-black leading-none text-gray-800">{{ productPrice  }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  productCover: string
  productName: string
  itemsCount: number
  productPrice: string
  productId:number
}>()

const emit = defineEmits(['removeShopItem'])
const removeItemFromShopCard = (productId: number): void => {
  emit('removeShopItem', productId)
}
</script>