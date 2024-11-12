<script setup lang="ts">
interface Props {
  icon: string;
  size?: { x: 4 | 6 | 8; y: 4 | 6 | 8 };
  active?: boolean;
  click: () => void;
  scale?: boolean;
}
const {
  icon,
  size = { x: 4, y: 4 },
  active = true,
  scale = false,
  click,
} = defineProps<Props>();
</script>
<template>
  <button @click="click">
    <img
      :src="icon"
      :alt="`Button with ${icon} icon`"
      :class="`h-${size.y} w-${size.x} ${!active && 'brightness-75'} ${active && scale && 'scale-110'}`"
    />
  </button>
</template>
