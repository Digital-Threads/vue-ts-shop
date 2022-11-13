<template>

</template>

<script lang="ts" setup>

import {onBeforeMount} from "vue";
import ProductCard from "../components/ProductCard.vue";
import LoadMore from "../components/LoadMore.vue";
import {useProductStore} from "../../../lib/store/product";
import {useCategoryStore} from "../../../lib/store/category";
const categoryStore: any = useCategoryStore();

onBeforeMount(async () => {
  await categoryStore.fetchCategories();
});
</script>
