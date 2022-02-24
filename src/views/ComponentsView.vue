<script setup lang="ts">
import TheButton from "@/components/TheButton.vue";
import TheIcon from "@/components/TheIcon.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
</script>

<template>
  <p>Icon</p>
  <TheIcon>
    <ToolingIcon />
  </TheIcon>

  <p>Button: label only</p>
  <TheButton> Button label xyz </TheButton>

  <p>Button: icon only</p>
  <TheButton>
    <TheIcon>
      <ToolingIcon />
    </TheIcon>
  </TheButton>

  <p>Button: label and icon at the start</p>
  <TheButton>
    <TheIcon :start="true">
      <ToolingIcon />
    </TheIcon>
    Button label xyz
  </TheButton>

  <p>Button: label and icon at the end</p>
  <TheButton>
    Button label xyz
    <TheIcon end>
      <ToolingIcon />
    </TheIcon>
  </TheButton>
</template>
