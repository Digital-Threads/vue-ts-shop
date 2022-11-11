<template>
  <router-link to="/product" class="flex flex-col gap-1 m-10 cursor-pointer hover:scale-105 transform duration-200">
    <img :src="image" alt="" class="w-[200px] h-[200px]"/>
    <p>{{productName}}</p>
    <p class="font-medium">{{price}}</p>
  </router-link>
</template>

<script lang="ts" setup>

const props = defineProps<{
  image: string;
  productName: string
  price: string
}>();
</script>
