<template>
<!--<div v-if="productId">-->
  <router-link :to="`/products/${productId}`" class="flex flex-col gap-1 m-10 cursor-pointer hover:scale-105 transform duration-200" >
    <img :src="productImage" alt="" class="w-[200px] h-[200px]"/>
    <p>{{ productName }}</p>
    <p class="font-medium">{{ productPrice }}</p>
  </router-link>
<!--</div>-->


</template>

<script lang="ts" setup>

interface Props {
  productImage: string;
  productId: number;
  productName: string
  productPrice: string,
}

const props = defineProps<Props>();

console.log("PROPS::::::", props)
</script>
