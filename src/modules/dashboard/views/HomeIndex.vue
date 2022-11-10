<template>
    <hero />
    <!-- <container>
      <product-grid title="Featured products" :items="items"> </product-grid>
    </container> -->
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue"
  import Hero from "@/components/layouts/Hero.vue";
  export default defineComponent({
    name: "Home",
    computed: {
      // items() {
      //   return this.$store.getters.getFeaturedProducts;
      // }
    },
    components: {
      Hero
    }
  });
  </script>
  
