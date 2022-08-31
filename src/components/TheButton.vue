<script setup lang="ts">
import { computed, reactive } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: undefined,
  },
  size: {
    type: String,
    default: undefined,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
});

// state:styles
const defaultStyle = "button";
const styles = reactive<{
  [key: string]: string;
}>({
  primary: "button--primary",
});

const sizes = reactive<{
  [key: string]: string;
}>({
  lg: "button-lg",
  md: "button-md",
  sm: "button-sm",
});
// state
const selectedStyle = computed(() => styles[props.type] || "");
const selectedSize = computed(() => sizes[props.size] || "");
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <span class="button__bg"></span>
    <span v-if="$slots.start" class="button__icon">
      <slot name="start" />
    </span>
    <span class="button__label">
      <slot />
    </span>
    <span v-if="$slots.end" class="button__icon">
      <slot name="end" />
    </span>
  </RouterLink>

  <a
    v-else-if="href"
    :href="href"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <span class="button__bg"></span>
    <span v-if="$slots.start" class="button__icon">
      <slot name="start" />
    </span>
    <span class="button__label">
      <slot />
    </span>
    <span v-if="$slots.end" class="button__icon">
      <slot name="end" />
    </span>
  </a>

  <button v-else :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`">
    <span class="button__bg"></span>
    <span v-if="$slots.start" class="button__icon">
      <slot name="start" />
    </span>
    <span class="button__label">
      <slot />
    </span>
    <span v-if="$slots.end" class="button__icon">
      <slot name="end" />
    </span>
  </button>
</template>

<style>
.button {
  cursor: pointer;
  border: none;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background: none transparent;
  color: var(--white);
  line-height: 1;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  position: relative;
}
.button[disabled] {
  color: var(--black);
  pointer-events: none;
}
.button:focus-visible {
  outline: none;
}
.button__bg {
  background-color: var(--theme-main);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button:hover .button__bg,
.button:focus .button__bg {
  opacity: 0.2;
}
.button__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
}
.button__label {
  position: relative;
  width: 100%;
  pointer-events: none;
}
.button-sm {
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
  letter-spacing: -0.025em;
  transform: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 0.1);
}
@media (min-width: 768px) {
  .button-sm {
    padding: 0 10px;
  }
}
@media (min-width: 1600px) {
  .button-sm {
    height: 34px;
    padding: 0 14px;
    font-size: 16px;
  }
}
.button-md {
  height: 46px;
  padding: 0 22px;
  font-size: 16px;
  letter-spacing: -0.025em;
  transform: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 0.1);
}
@media (min-width: 768px) {
  .button-md {
    padding: 0 30px;
  }
}
@media (min-width: 1600px) {
  .button-md {
    height: 57px;
    padding: 0 28px;
    font-size: 20px;
  }
}
.button-lg {
  height: 3.5em;
  padding: 0 1.45em;
  font-size: 1.25em;
  letter-spacing: -0.05em;
}
@media (min-width: 768px) {
  .button-lg {
    height: 3.75em;
    padding: 0 1.75em;
    font-size: 1.75em;
  }
}

.router-link-exact-active {
  color: var(--theme-main);
}
</style>
