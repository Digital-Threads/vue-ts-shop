<template>
  <div class="2xl:container 2xl:mx-auto">
    <div class="bg-gray-50 text-center lg:py-10 md:py-8 py-6">
      <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Product Collections</p>
    </div>
    <div class="py-6 lg:px-20 md:px-6 px-4">
      <hr class="w-full bg-gray-200 my-6"/>
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
        <product-card
            v-for="product in products"
            :key="product.id"
            :product="product"
            :productId="product.id"
            :productImage="product.thumbnailUrl"
            :productName="product.name"
            :productPrice="product.defaultDisplayedPriceFormatted"
            @addItemToShop="addToBasket"
        />
      </div>
      <load-more/>
    </div>
  </div>
</template>
<script lang="ts" setup>

import ProductCard from "./ProductCard.vue";
import LoadMore from "../LoadMore.vue";
import {useShopStore} from "../../../../lib/store/shop";
import {ProductSchema} from "../../../../lib/api/product/schemas";

const addItemToShop = useShopStore().addItemToShop

interface Props {
  products: ProductSchema[];
}

const props = defineProps<Props>();

const addToBasket = (product: ProductSchema) => {
  addItemToShop({item: product, itemsCount: 1})
}
</script>
