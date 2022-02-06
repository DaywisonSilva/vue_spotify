import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/css/main.css";
import * as LottiePlayer from "@lottiefiles/lottie-player";

const app = createApp(App);

app.component("lottie-player", LottiePlayer);
app.use(router);
app.mount("#app");
