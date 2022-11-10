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
          Do you want to delete all products from card?
        </p>
      </div>
      <div class="flex gap-4 w-6/12 justify-evenly">
        <button
          @click="deleteAll"
          class="bg-red-600 rounded text-white px-12 py-2 hover:bg-red-800 duration-300"
        >
          Delete
        </button>
        <button
          @click="close"
          class="bg-blue-500 rounded text-white px-12 py-2 hover:bg-blue-800 duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

const emit = defineEmits(["closeModal", "deleteAllProducts"]);
function close() {
  emit("closeModal");
}

function deleteAll() {
  emit("deleteAllProducts");
}
</script>
