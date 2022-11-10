<template>
  <router-view v-slot="{ Component }">
  <Header/>
    
    
    <transition name="fade">
      <div v-if="bootstrapped" class="w-full h-full">
        <component :is="Component" />
        
      </div>
    </transition>
      <Footer/>
  </router-view>
</template>

<script lang="ts" setup>
import { useProgress } from "@/lib/ui/hooks/progress";
import {  defineComponent, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useSleep } from "./lib/ui/hooks/sleep";
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";



const progress = useProgress();
const router = useRouter();
const sleep = useSleep();

const bootstrapped = ref(false);

router.beforeEach((from, to, next) => {
  progress.start();
  next();
});

onBeforeMount(async () => {
  try {
    progress.start();
    await Promise.all([router.isReady(), sleep(500)]);
  } finally {
    progress.finish();
    bootstrapped.value = true;

    router.afterEach(() => {
      progress.finish();
    });
  }
});
</script>
