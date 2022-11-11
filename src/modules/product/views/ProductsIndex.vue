<template>
  <div class="flex flex-col gap-6 m-10">
    <p class="text-3xl font-bold">Products</p>
    <div class="flex flex-wrap">
      <card
          v-for="card in productStore.productsList"
          :key="card.id"
          :image="card.imageUrl"
          :price="card.defaultDisplayedPriceFormatted"
          :productName="card.productName"
      />
      <load-more/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, reactive} from "vue";
import Card from "@/components/cards/Card.vue";
import LoadMore from "@/components/cards/LoadMore.vue";
import {useProductStore} from "../../../lib/store/product";
import {Product} from "../schema/productSchema";
import {Category} from "../schema/categorySchema";
import {useCategoryStore} from "../../../lib/store/category";

const productStore: any = useProductStore();
const categoryStore: any = useCategoryStore();
let productList: Product[] = reactive([])
let categoryList: Category[] = reactive([])

onBeforeMount(async () => {
  productList = await productStore.fetchProducts();
  categoryList = await categoryStore.fetchCategories();
});
</script>
