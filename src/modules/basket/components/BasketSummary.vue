<template>
  <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 h-full">
    <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
      <div>
        <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800">Summary</p>
      </div>
      <div>
        <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
          <p class="text-2xl leading-normal text-gray-800">Total</p>
          <p class="text-2xl font-bold leading-normal text-right text-gray-800">{{ shopTotalPrice }} ₽</p>
        </div>
        <button class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                @click="checkout">Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  shopTotalPrice: number

}>()
const emit = defineEmits(['removeShopItem'])

const removeShopItem = (productId: number): void => {
  emit('removeShopItem', productId)
}

const checkout = (): void => {
  alert('You have successfully checked out ;) ')
}
</script>

<style scoped>

</style>