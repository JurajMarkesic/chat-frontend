import { createApp } from "vue";
import { createPinia } from "pinia";
import { io } from "socket.io-client";

import "virtual:windi.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.provide(
  "socket",
  io("192.168.49.2:31621", {
    transports: ["websocket"],
    upgrade: false,
  }),
);

app.use(createPinia());
app.use(router);

app.mount("#app");
