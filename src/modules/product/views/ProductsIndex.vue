<template>
  <categories-list :categories="categoryStore.getCategoriesList"></categories-list>
  <products-list :products="productStore.getProductList"></products-list>
</template>

<script lang="ts" setup>

import {onBeforeMount} from "vue";
import {useProductStore} from "../../../lib/store/product";
import {useCategoryStore} from "../../../lib/store/category";
import CategoriesList from "../components/category/CategoriesList.vue";
import ProductsList from "../components/product/ProductsList.vue";

const productStore: any = useProductStore();
const categoryStore: any = useCategoryStore();

onBeforeMount(async () => {
  await productStore.fetchProducts();
  await categoryStore.fetchCategories();
});
</script>
