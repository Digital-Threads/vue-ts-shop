<template>
  <div class="overflow-y-hidden pb-16">
    <div class="flex justify-center items-center">
      <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
          <div class="bg-gray-50 text-center lg:py-10 md:py-8 py-6 w-full">
            <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Categories</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
            <category-card v-for="category in categories"
                           :key="category.id"
                           :category-image="category.thumbnailUrl"
                           :category-name="category.name"
            ></category-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

import CategoryCard from "./CategoryCard.vue";

interface Props {
  categories: [];
}

const props = defineProps<Props>();

</script>