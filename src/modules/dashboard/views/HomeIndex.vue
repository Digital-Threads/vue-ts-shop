<template>
  <hero/>
  <div class="flex flex-wrap">
    <card
        v-for="card in cards"
        :key="card.id"
        :image="card.image"
        :price="card.price"
        :productName="card.productName"
    />
    <load-more/>

  </div>

</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import Hero from "@/components/layouts/Hero.vue";
import Card from "@/components/cards/Card.vue";
import LoadMore from "@/components/cards/LoadMore.vue";
defineComponent({
  name: "Home",
  components: {
    Hero,
    Card,
    LoadMore
  },
});

const cards = [
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
  {
    id: 3,
    image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/bfcd6cf525a947e7af1eaf350080fa93_9366/Forum_Low_Shoes_Green_HQ9125_HM1.jpg",
    productName: "Product 3 ",
    price: "325",
  },

  {
    id: 4,
    image:
        "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?wid=400&hei=400&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
    productName: "Product 4 ",
    price: "148",
  }


];
</script>
