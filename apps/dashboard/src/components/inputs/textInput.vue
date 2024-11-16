<script setup lang="ts">
interface Props {
  placeholder?: string;
  color?: "sec" | "third";
  width?: "w-full" | "w-auto";
}
const {
  color = "third",
  placeholder = "",
  width = "w-auto",
} = defineProps<Props>();
</script>
<template>
  <label>
    <input
      :class="`bg-dash-${color} ${width} shadow-button-inner placeholder:text-dash-TextInactive rounded-md px-4 py-2 outline-none`"
      :placeholder="placeholder"
    />
  </label>
</template>
