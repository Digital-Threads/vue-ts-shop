<template>
  <div class="flex flex-col gap-6 m-10">
    <p class="text-3xl font-bold">Products</p>
    <div class="flex flex-wrap">
      <product-card
          v-for="card in productStore.getProductList"
          :key="card.id"
          :productId="card.id"
          :productImage="card.thumbnailUrl"
          :productPrice="card.defaultDisplayedPriceFormatted"
          :productName="card.name"
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
import {ProductSchema} from "../../../lib/api/product/schemas";
import {CategorySchema} from "../../../lib/api/category/schemas";
import {storeToRefs} from "pinia";

const productStore: any = useProductStore();
const categoryStore: any = useCategoryStore();
const  productList  = storeToRefs <ProductSchema[]>(productStore.getProductList);
const  categoryList  = categoryStore.getCategoryList;


onBeforeMount(async () => {
  await productStore.fetchProducts();
  console.log('Product List :::::', productList)
 await categoryStore.fetchCategories();
});
</script>
