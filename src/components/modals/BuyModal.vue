<template>
  <div
    class="w-full h-full bg-black absolute bg-opacity-30 flex items-center justify-center overflow-y-hidden"
  >
    <div
      class="bg-white w-[500px] h-[200px] relative flex flex-col items-center justify-center gap-4"
    >
      <button
        @click="close"
        class="absolute right-2 top-2 text-3xl font-thin text-red-500 hover:text-red-800"
      >
        X
      </button>
      <div class="flex items-center justify-center">
        <p class="text-lg font-medium">
          You buy products !
        </p>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

const emit = defineEmits(["closeModal"]);
function close() {
  emit("closeModal");
}

</script>
