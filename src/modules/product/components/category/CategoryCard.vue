<template>
  <div class="relative group flex justify-center items-center h-full w-8/12">
    <img :alt="categoryName" :src="categoryImage" alt="shoe-image" class="object-center object-cover h-full w-full"/>
    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-blue-300">
      {{ categoryName }}
    </button>
    <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-blue-300 bg-opacity-50"></div>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  categoryName: string
  categoryImage: string
}

const props = defineProps<Props>();

</script>