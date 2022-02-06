<template>
  <div class="home"><AppSearchBar /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppSearchBar from "@/components/SearchBar/SearchBar.vue";
export default defineComponent({
  name: "Home",
  components: { AppSearchBar },
});
</script>
