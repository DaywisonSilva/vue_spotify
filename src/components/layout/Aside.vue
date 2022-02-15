<template>
  <aside class="aside">
    <lottie-player
      autoplay
      mode="normal"
      src="animations/spotify.json"
      style="width: 80px; height: 80px; position: relative; bottom: 5px"
    />
    <HomeIcon class="aside__icon aside__icon--active" />
    <LocationMarkerIcon class="aside__icon" />
    <MicrophoneIcon class="aside__icon" />
    <CollectionIcon class="aside__icon" />
    <HeartIcon class="aside__icon" />
  </aside>
</template>

<script lnag="ts">
import { defineComponent } from "@vue/runtime-core";
import {
  HomeIcon,
  LocationMarkerIcon,
  MicrophoneIcon,
  CollectionIcon,
  HeartIcon,
} from "@heroicons/vue/solid";

export default defineComponent({
  components: {
    HomeIcon,
    LocationMarkerIcon,
    MicrophoneIcon,
    CollectionIcon,
    HeartIcon,
  },
});
</script>

<style scoped>
.aside {
  float: left;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 40px);
  overflow: auto;
  padding-top: 40px;
  position: relative;
  z-index: 2;
  background-color: #000;
}

.aside__icon {
  width: 25px;
  height: 25px;
  margin-top: 45px;
  color: #333333;
  cursor: pointer;
  transition: transform 0.2s linear;
}

.aside__icon:hover {
  transform: scale(1.2);
}

.aside__icon--active {
  color: white;
}

@media screen and (min-width: 600px) {
  .aside {
    width: 133px;
  }
}
</style>
