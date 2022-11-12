<template>
  <router-view v-slot="{ Component }">
    <div class="h-screen flex flex-col justify-between ">
      <Header />

      <transition name="fade">
        <div v-if="bootstrapped" class="w-full h-full overflow-y-auto ">
          <component :is="Component" />
        </div>
      </transition>
      <Footer />
    </div>
  </router-view>
</template>

<script lang="ts" setup>
import { useProgress } from "@/lib/ui/hooks/progress";
import { defineComponent, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useSleep } from "./lib/ui/hooks/sleep";
import Header from "@/components/layouts/TheHeader.vue";
import Footer from "@/components/layouts/TheFooter.vue";

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
