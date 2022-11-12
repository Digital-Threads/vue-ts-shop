<template>
  <div class="w-full bg-gray-700 h-16 flex items-center justify-between px-32 py-10">
    <div class="flex gap-6 items-center">
      <router-link
          to="/"
          class="text-white hover:text-blue-500 duration-200 hover:scale-105 transform"
      >
        <img src="../../assets/shoes.png" alt="shoesLogo">
      </router-link>
      <router-link
          active-class="text-blue-500"
          to="/"
          class="text-white hover:text-blue-500 duration-200"
      >
        Home
      </router-link>
    </div>
    <div class="flex items-center gap-6">
      <router-link
          active-class="bg-blue-800"
          to="/basket"
          class="text-white hover:text-blue-500 duration-200 bg-blue-500 py-2 px-4 rounded transform hover:scale-105 hover:bg-blue-800"
      >
        <img src="../../assets/card.png" alt="card" class="w-6 h-6">
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>


