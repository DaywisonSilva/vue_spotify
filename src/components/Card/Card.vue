<template>
  <div class="card">
    <img :src="src" alt="mix album" class="card__img" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
});
</script>

<style src="./Styles.css" scoped></style>
