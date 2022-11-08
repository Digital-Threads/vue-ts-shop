<template>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import {useProductStore} from "../../../lib/store/product";
import {useCategoryStore} from "../../../lib/store/category";
import {onBeforeMount} from "vue";

const productStore =  useProductStore()
const categoryStore =  useCategoryStore()

const router = useRouter();
console.log('TEST:::::::',import.meta.url)

onBeforeMount(async ()=>{
  await productStore.fetchProducts();
  await categoryStore.fetchCategories();
})
</script>
