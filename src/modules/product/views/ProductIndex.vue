<template>
  <Suspense>
    <product-detail
        v-if="product"
        :product-cover="product.imageUrl"
        :product-description="product.description"
        :product-images="product.galleryImages"
        :product-name="product.name"
        :product-price="product.defaultDisplayedPriceFormatted"
        :product="product"
    ></product-detail>
    <template #fallback>
      Loading
    </template>
  </Suspense>


</template>

<script lang="ts" setup>
import ProductDetail from "../components/product/ProductDetail.vue";
import {useRoute, useRouter} from "vue-router";
import {onBeforeMount, ref} from "vue";
import {ProductSchema} from "../../../lib/api/product/schemas";
import {useProductStore} from "../../../lib/store/product";

const productStore = useProductStore()

const route = useRoute()
const product = ref<ProductSchema | null>(null)
onBeforeMount(async () => {
  product.value = await productStore.fetchProductById(+route.params.id)
  console.log('Product ::::', product.value)


})
</script>
