<template>
  <hero />
  <div class="flex flex-col items-center gap-6 m-10">
    <p class="text-3xl font-bold">Categories</p>
    <div class="flex gap-6">
      <div v-for="category in categoryStore.categoriesList" :key="category.id">
        <button
          class="outline-none bg-white text-slate-400 px-10 py-1 border border-slate-400 hover:bg-slate-400 hover:text-white hover:border-transparent duration-200"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
  </div>
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
import { onBeforeMount } from "vue";
import Hero from "@/components/layouts/Hero.vue";
import Card from "@/components/cards/Card.vue";
import LoadMore from "@/components/cards/LoadMore.vue";
import { useProductStore } from "../../../lib/store/product";
import { useCategoryStore } from "../../../lib/store/category";

const productStore: any = useProductStore();
const categoryStore: any = useCategoryStore();

onBeforeMount(async () => {
  await productStore.fetchProducts();
  await categoryStore.fetchCategories();
});
</script>
