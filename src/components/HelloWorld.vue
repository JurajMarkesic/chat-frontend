<script setup lang="ts">
import { inject, ref } from "vue";
import type { Socket } from "socket.io-client";

const props = defineProps<{
  msg: string;
}>();

const socket: Socket | undefined = inject("socket");
socket?.emit("hello", { name: "juraj", age: 24 });
socket?.on("noArg", () => {
  console.log("received socket event");
});

const isSignIn = ref(false);
const user = ref("");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Vue3GoogleOauth: any = inject("Vue3GoogleOauth");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const auth: any = inject("GAuth");
console.log("🚀 ~ file: HelloWorld.vue ~ line 20 ~ auth", auth);

async function handleClickSignIn() {
  try {
    const googleUser = await auth.signIn();
    if (!googleUser) {
      return null;
    }
    console.log("googleUser", googleUser);
    user.value = googleUser.getBasicProfile().getEmail();
    console.log("getId", user);
    console.log("getBasicProfile", googleUser.getBasicProfile());
    console.log("getAuthResponse", googleUser.getAuthResponse());
    console.log(
      "getAuthResponse",
      auth.instance.currentUser.get().getAuthResponse()
    );
  } catch (error) {
    //on fail do something
    console.error(error);
    return null;
  }
}

async function handleClickGetAuthCode() {
  try {
    const authCode = await auth.getAuthCode();
    console.log("authCode", authCode);
  } catch (error) {
    //on fail do something
    console.error(error);
    return null;
  }
}

async function handleClickSignOut() {
  try {
    await auth.signOut();
    console.log("isAuthorized", auth.isAuthorized);
    user.value = "";
  } catch (error) {
    console.error(error);
  }
}

defineExpose({
  Vue3GoogleOauth,
  isSignIn,
  user,
  handleClickSignIn,
  handleClickGetAuthCode,
  handleClickSignOut,
  props,
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ props.msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
    <div>
      <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
      <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
      <h2 v-if="user">signed user: {{ user }}</h2>
      <button
        @click="handleClickSignIn"
        :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
      >
        > sign in
      </button>
      <br />
      <button
        @click="handleClickGetAuthCode"
        :disabled="!Vue3GoogleOauth.isInit"
      >
        > get authCode
      </button>
      <br />
      <button
        @click="handleClickSignOut"
        :disabled="!Vue3GoogleOauth.isAuthorized"
      >
        > sign out
      </button>
      <br />
      <br />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
