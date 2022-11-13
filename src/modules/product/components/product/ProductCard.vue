<template>
  <router-link :to="{name:'ProductDetail', params:{id:productId}}">
    <div>
      <div class="relative group">
        <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img :alt="productName" :src="productImage" class="w-full"/>
        <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          <button class="font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full hover:border hover:bg-transparent hover:border-white hover:text-white">Add to bag</button>
          <router-link :to="{name:'ProductDetail', params:{id:productId}}" type="button"
                       class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white hover:bg-white hover:text-black text-center"> Quick View
          </router-link>
        </div>
      </div>

      <p class="font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{{ productName }}</p>
      <p class="font-semibold text-xl leading-5 text-gray-800 mt-4">{{ productPrice }}</p>
    </div>
  </router-link>
  <!--</div>-->


</template>

<script lang="ts" setup>

interface Props {
  productImage: string;
  productId: number;
  productName: string
  productPrice: string,
}

const props = defineProps<Props>();

console.log("PROPS::::::", props)
</script>
