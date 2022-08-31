<script setup lang="ts">
import TheButton from "@/components/TheButton.vue";
import TheIcon from "@/components/TheIcon.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
</script>

<template>
  <pre>Icon</pre>
  <TheIcon>
    <ToolingIcon />
  </TheIcon>

  <pre>Button: label only</pre>
  <TheButton> Button label xyz </TheButton>

  <pre>Button: icon only</pre>
  <TheButton>
    <TheIcon>
      <ToolingIcon />
    </TheIcon>
  </TheButton>

  <pre>Button: label and icon at the start</pre>
  <TheButton>
    <TheIcon :start="true">
      <ToolingIcon />
    </TheIcon>
    Button label xyz
  </TheButton>

  <pre>Button: label and icon at the end</pre>
  <TheButton>
    Button label xyz
    <TheIcon end>
      <ToolingIcon />
    </TheIcon>
  </TheButton>
</template>
