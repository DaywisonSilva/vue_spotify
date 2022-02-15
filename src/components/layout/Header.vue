<template>
  <header class="header">
    <app-search-bar />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import AppSearchBar from "@/components/SearchBar/SearchBar.vue";

export default defineComponent({
  components: {
    AppSearchBar,
  },
});
</script>

<style scoped>
.header {
  position: relative;
}
</style>
