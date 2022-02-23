<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header bg="green-700">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div bg="blue-300">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/chat">Chat</RouterLink>
        <RouterLink to="/auth">Auth</RouterLink>
        <RouterLink to="/components">Components</RouterLink>
      </nav>
    </div>
  </header>

  <main bg="red-900">
    <RouterView />
  </main>
</template>

<style>
/* @import "@/assets/base.css"; */
</style>
