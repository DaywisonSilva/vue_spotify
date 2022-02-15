<template>
  <app-aside></app-aside>
  <app-header></app-header>
  <app-main>
    <router-view v-slot="{ Component }">
      <transition enter-active-class="fadeInLeft" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </app-main>
</template>

<script lang="ts">
import AppMain from "@/components/layout/Main.vue";
import AppAside from "@/components/layout/Aside.vue";
import AppHeader from "@/components/layout/Header.vue";

export default {
  components: {
    AppMain,
    AppAside,
    AppHeader,
  },
};
</script>

<style>
#app {
  height: 100vh;
  overflow: auto;
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
