<template>
  <div class="w-full bg-gray-200 h-40 flex px-32 py-10 justify-between">
    <div class="flex flex-col gap-2">
      <div class="flex items-start gap-2">
        <p class="text-gray-700">Tel.</p>
        <p class="underline text-gray-700">+374545875215</p>
      </div>
      <div class="flex items-start gap-2">
        <p class="text-gray-700">Address</p>
        <p class="underline text-gray-700">Street N25</p>
      </div>
    </div>

    <div class="flex gap-2 items-center">
      <a href="#">
        <img class="w-8 h-8" src="../../assets/facebook.png" alt="facebook" />
      </a>
      <a href="#">
        <img class="w-8 h-8" src="../../assets/linkedin.png" alt="linkedin" />
      </a>
      <a class="w-8 h-8" href="#">
        <img src="../../assets/instagram.png" alt="instagram" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
