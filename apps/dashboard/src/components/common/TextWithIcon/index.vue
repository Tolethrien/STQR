<script setup lang="ts">
interface Props {
  icon: string;
  text: string;
  side?: "left" | "right";
}
const { icon, side = "left", text } = defineProps<Props>();
const sideStyle =
  side === "left" ? "right-full -translate-x-1/2" : "left-full translate-x-1/2";
</script>
<template>
  <span class="relative"
    >{{ text }}
    <img
      :class="`absolute top-1/2 h-4 w-4 -translate-y-1/2 ${sideStyle}`"
      :src="icon"
      alt=""
    />
  </span>
</template>
