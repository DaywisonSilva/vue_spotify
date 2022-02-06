<template>
  <app-page>
    <router-view v-slot="{ Component }">
      <transition enter-active-class="fadeInLeft">
        <component :is="Component" />
      </transition>
    </router-view>
  </app-page>
</template>

<script lang="ts">
import AppPage from "@/components/AppPage.vue";
export default {
  components: {
    AppPage,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #000;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-duration: 0.5s;
}
</style>
