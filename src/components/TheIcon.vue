<script setup lang="ts">
withDefaults(
  defineProps<{
    start?: boolean;
    end?: boolean;
  }>(),
  {
    start: false,
    end: false,
  }
);
</script>

<template>
  <span class="icon">
    <span
      v-if="start"
      class="flex items-baseline justify-center flex-shrink-0 w-6 h-6 mr-2 text-violet-400"
    >
      <slot />
    </span>
    <span
      v-else-if="end"
      class="flex items-baseline justify-center flex-shrink-0 w-6 h-6 ml-2 text-yellow-400"
    >
      <slot />
    </span>
    <span
      v-else
      class="flex items-baseline justify-center flex-shrink-0 w-6 h-6 text-teal-400"
    >
      <slot />
    </span>
  </span>
</template>

<style scoped>
.icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
