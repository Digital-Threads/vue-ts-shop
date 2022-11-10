<template>
  <div class="flex gap-32 cursor-pointer justify-center w-full mt-20">
    <div>
      <img :src="image" alt="" class="w-[600px] h-[600px]" />
    </div>
    <div class="w-5/12 flex flex-col gap-4">
      <p class="text-3xl font-medium">{{ productName }}</p>
      <p>{{ description }}</p>
      <p class="font-medium text-4xl">{{ price }}</p>
      <div>
        <button
          to="/home"
          class="bg-blue-500 rounded text-white px-12 py-4 hover:bg-blue-800 duration-300"
        >
          Add to card
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";

const props = defineProps<{
  image: string;
  productName: string;
  price: string;
  description: string;
}>();
</script>
