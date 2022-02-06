<template>
  <label class="searchBar" for="search">
    <div class="searchBar__searchIcon"></div>
    <span
      class="searchBar__label"
      :class="[
        { hasValue: !!state.search },
        { 'searchBar__label--focus': state.focus },
      ]"
    >
      Search...
    </span>
  </label>
  <input
    type="text"
    class="searchBar__input"
    autocomplete="new-password"
    v-model="state.search"
    @focus="state.focus = true"
    @blur="state.focus = false"
    id="search"
  />
  <span class="searchBar__filter">
    <AdjustmentsIcon class="searchBar__iconAdjustments" />
    <span>filters</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { AdjustmentsIcon } from "@heroicons/vue/solid";

interface State {
  search: string;
  focus: boolean;
}
export default defineComponent({
  components: {
    AdjustmentsIcon,
  },
  setup() {
    const state = reactive<State>({
      search: "",
      focus: false,
    });

    return {
      state,
    };
  },
});
</script>

<style src="./Styles.css" scoped></style>
