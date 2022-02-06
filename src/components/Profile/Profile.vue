<template>
  <div>
    <h1>{{ width }}</h1>
    <h1>{{ height }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useMediaQuery } from "@/utils";

interface ProfileState {
  width: number;
  height: number;
}

export default defineComponent({
  setup() {
    const { width, height } = toRefs(useMediaQuery());

    const state = reactive<ProfileState>({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    return {
      state,
      width,
      height,
    };
  },
});
</script>

<style src="./Styles.css" scoped></style>
