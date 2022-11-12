<template>
  <div class="flex flex-col gap-6 m-10">
    <p class="text-3xl font-bold">Products</p>
    <div class="flex flex-wrap">
          <product-card
              v-for="product in productStore.getProductList"
              :key="product.id"
              :productId="product.id"
              :productImage="product.thumbnailUrl"
              :productName="product.name"
              :productPrice="product.defaultDisplayedPriceFormatted"
          />
      <load-more/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {onBeforeMount} from "vue";
import ProductCard from "../components/ProductCard.vue";
import LoadMore from "../components/LoadMore.vue";
import {useProductStore} from "../../../lib/store/product";
import {useCategoryStore} from "../../../lib/store/category";

const productStore: any = useProductStore();
const categoryStore: any = useCategoryStore();

onBeforeMount(async () => {
  await productStore.fetchProducts();
  await categoryStore.fetchCategories();
});
</script>
