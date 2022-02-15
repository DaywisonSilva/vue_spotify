<template>
  <div class="card">
    <span class="card__tracks">{{ tracks }} tracks</span>
    <img :src="src" alt="mix album" class="card__img" />
    <div class="card__info" :class="getOverlayColor()"></div>
    <div class="card__info">
      <button class="card__btn"><PlayIcon /></button>
      <div class="card__text">
        <span class="card__title">{{ title }}</span>
        <span class="card__subtitle">{{ subtitle }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PlayIcon } from "@heroicons/vue/solid";

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    tracks: {
      type: Number,
      required: true,
    },
  },
  components: {
    PlayIcon,
  },
  setup(props) {
    const getOverlayColor = () => {
      console.log(props.color);
      switch (props.color) {
        case "orange":
          return "card__info--overlayOrange";
        case "red":
          return "card__info--overlayRed";
        case "blue":
          return "card__info--overlayBlue";
        case "green":
          return "card__info--overlayGreen";
      }
    };

    return {
      getOverlayColor,
    };
  },
});
</script>

<style src="./Styles.css" scoped></style>
