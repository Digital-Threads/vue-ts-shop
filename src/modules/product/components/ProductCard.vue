<template>
  <router-link :to="{name:'product',param:{id: props.productId} }" class="flex flex-col gap-1 m-10 cursor-pointer hover:scale-105 transform duration-200">
    <img :src="props.productImage" alt="" class="w-[200px] h-[200px]"/>
    <p>{{ props.productName }}</p>
    <p class="font-medium">{{ props.productPrice }}</p>
  </router-link>
</template>
<script lang="ts" setup>

const props = defineProps<{
  productImage: string;
  productId: Number;
  productName: string
  productPrice: Number
}>();
</script>
