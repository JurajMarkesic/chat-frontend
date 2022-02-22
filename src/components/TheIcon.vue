<template>
  <span class="icon">
    <slot></slot>
  </span>
</template>

<style scoped>
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
}

.icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
