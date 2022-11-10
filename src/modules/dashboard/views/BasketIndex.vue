<template>
  <div class="flex gap-32 justify-center w-full  h-full relative">
    <div class="w-6/12 flex flex-col items-center gap-4 pt-20">
      <p class="text-3xl font-medium">Products in card</p>
      <p v-if="!productsInCard.length" class="text-gray-700">
        No products in card
      </p>
      <div v-else class="flex flex-wrap">
      <card
        v-for="card in productsInCard"
        :key="card.id"
        :image="card.image"
        :productName="card.productName"
        :price="card.price"
      />
    </div>
    </div>
    <div class="w-6/12 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 h-full pt-20 flex flex-col gap-12 items-center justify-center ">
     <div class="flex gap-4 w-6/12 justify-evenly border-b border-gray-300">
      <p class="text-lg font-normal">Total price</p>
      <p class="text-lg font-medium">$1200</p>
     </div>
     <div class="flex gap-4 w-6/12 justify-evenly">
      <button
          @click="openDeleteModal = !openDeleteModal"
          class="bg-red-600 rounded text-white px-12 py-2 hover:bg-red-800 duration-300 outline-none"
        >
          Delete
        </button>
        <button
          class="bg-blue-500 rounded text-white px-12 py-2 hover:bg-blue-800 duration-300 outline-none"
        >
          Buy
        </button>
     </div>
    </div>
    <delete-modal v-if="openDeleteModal" @closeModal="openDeleteModal = false"/>

  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import Card from "@/components/cards/Card.vue";
import DeleteModal from "@/components/modals/DeleteModal.vue";

defineComponent({
    name: "BasketIndex",
    components: {
      Card,
      DeleteModal
    },
  });
const openDeleteModal = ref(false)
const productsInCard = [
{
      id: 1,
      image:
        "https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/8f3cda35-d270-4508-8d18-bf51377f5768/image.jpg",
      productName: "Product 1 ",
      price: "515",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=MPOqUwkp7g0MawLUQsECgl1ME12YWNnqsFwracR9HQw=",
      productName: "Product 2",
      price: "125",
    },
]
</script>
