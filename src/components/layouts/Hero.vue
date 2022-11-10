<template>
    <div
      class="w-full relative h-96 flex flex-col justify-center items-start bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600"
    >
       <div class="mx-40 flex flex-col gap-2">
        <div class="text-6xl text-white bg-black bg-opacity-60 font-bold py-2 px-3 w-80">New shoe!</div>
        <div class="text-2xl text-white bg-black bg-opacity-60 font-normal py-2 px-3">Nike AirMax Something for only $129</div>
        <router-link to="/products" active-class="text-blue-500">
          <button class=" bg-blue-500 rounded text-white px-12 py-4  hover:bg-blue-800 duration-300" >
          View product
          </button>
        </router-link>
    </div>
</div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
  });
  </script>
