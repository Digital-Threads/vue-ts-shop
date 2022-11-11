<template>
  <div class="flex flex-col gap-6 m-10">
    <p class="text-3xl font-bold">Products</p>
    <div class="flex flex-wrap">
      <card
        v-for="card in productStore.productsList"
        :key="card.id"
        :image="card.imageUrl"
        :productName="card.productName"
        :price="card.defaultDisplayedPriceFormatted"
      />
      <load-more />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onBeforeMount } from "vue";
import Hero from "@/components/layouts/Hero.vue";
import Card from "@/components/cards/Card.vue";
import LoadMore from "@/components/cards/LoadMore.vue";
import { useProductStore } from "../../../lib/store/product";

const productStore: any = useProductStore();

onBeforeMount(async () => {
  await productStore.fetchProducts();
});
</script>
