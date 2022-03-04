import { createApp } from "vue";
import { createPinia } from "pinia";
import { io } from "socket.io-client";

import "virtual:windi.css";

import App from "./App.vue";
import router from "./router";
import GAuth from "vue3-google-oauth2";

const app = createApp(App);
app.provide(
  "socket",
  io("http://192.168.49.2:32489", {
    transports: ["websocket"],
    upgrade: false,
  })
);

app.use(createPinia());
app.use(router);

const gAuthOptions = {
  clientId:
    "719626904664-r57cogjcnqee8duc49o1epjmkbb6o7dh.apps.googleusercontent.com",
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: true,
};
app.use(GAuth, gAuthOptions);
app.provide("GAuth", app.config.globalProperties.$gAuth);

app.mount("#app");
