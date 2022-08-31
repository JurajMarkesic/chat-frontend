<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheButton from "@/components/TheButton.vue";
</script>

<template>
  <div class="app">
    <header class="app__sidebar">
      <nav class="app__nav">
        <TheButton to="/">Home</TheButton>
        <TheButton to="/chat">Chat</TheButton>
        <TheButton to="/auth">Auth</TheButton>
        <TheButton to="/components">Components</TheButton>
      </nav>
    </header>

    <main class="app__main">
      <RouterView />
    </main>

    <aside class="app__aside">aside content</aside>
  </div>
</template>

<style scoped>
.app {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.app__sidebar {
  flex-basis: 20%;
}
.app__nav {
  display: grid;
}
.app__main {
  flex-basis: 60%;
}
.app__aside {
  flex-basis: 20%;
}
</style>
