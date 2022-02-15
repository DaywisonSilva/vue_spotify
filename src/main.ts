import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/css/main.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import * as LottiePlayer from "@lottiefiles/lottie-player";

const app = createApp(App);

app.component("lottie-player", LottiePlayer);
app.component("Swiper", Swiper);
app.component("SwiperSlide", SwiperSlide);
app.use(router);
app.mount("#app");
