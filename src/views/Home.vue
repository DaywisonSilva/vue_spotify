<template>
  <div class="home">
    <h1>Playlist for you</h1>
    <div class="slide">
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :freeMode="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <app-card src="img/slider/chill-mix.jpg" />
        </swiper-slide>
        <swiper-slide><app-card src="img/slider/gamer-mix.jpg" /></swiper-slide>
        <swiper-slide>
          <app-card src="img/slider/future-mix.jpg" />
        </swiper-slide>
        <swiper-slide>
          <app-card src="img/slider/classical-mix.jpg" />
        </swiper-slide>
        <swiper-slide>
          <app-card src="img/slider/chill-mix.jpg" />
        </swiper-slide>
        <swiper-slide><app-card src="img/slider/gamer-mix.jpg" /></swiper-slide>
        <swiper-slide>
          <app-card src="img/slider/future-mix.jpg" />
        </swiper-slide>
        <swiper-slide>
          <app-card src="img/slider/classical-mix.jpg" />
        </swiper-slide>

        <div class="overlay"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FreeMode, Pagination } from "swiper";
import AppCard from "@/components/Card/Card.vue";
export default defineComponent({
  name: "Home",
  components: {
    AppCard,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
});
</script>
<style scoped>
.swiper-slide {
  width: auto;
}
.slide {
  margin-top: 30px;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.mySwiper {
  height: 400px;
  color: white;
}

.overlay {
  display: none;
}

@media screen and (min-width: 1200px) {
  .overlay {
    display: block;
    background-image: linear-gradient(to right, transparent, black);
    background-color: transparent;
    position: absolute !important;
    top: 0;
    right: 0;
    z-index: 2;
    transform: translate(0) !important;
    width: 300px;
    height: 320px;
  }
}
</style>
