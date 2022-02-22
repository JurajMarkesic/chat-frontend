<script setup lang="ts">
import TheIcon from "@/components/TheIcon.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
</script>

<template>
  <div class="error">
    <p>Stop right there, sunshine!</p>
    <TheIcon>
      <ToolingIcon />
    </TheIcon>
    <h1>404</h1>
    <p>
      This page doesn't exist. Go back to the
      <RouterLink to="/">homepage</RouterLink>.
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .error {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
