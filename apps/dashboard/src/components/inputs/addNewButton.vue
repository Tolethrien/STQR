<script setup lang="ts">
import getIcons from "@/utils/icons";
interface Props {
  disable?: boolean;
  link?: string;
}

const { plusIcon } = getIcons();
const { disable = false, link = "" } = defineProps<Props>();
</script>
<template>
  <RouterLink
    :to="link"
    :class="`${disable && 'brightness-50 pointer-events-none'} bg-dash-accent text-dash-TextActive flex flex-col items-center justify-center p-2 font-medium`"
  >
    <img
      :src="plusIcon"
      alt="buttonAddIcon"
      :class="disable && 'brightness-75'"
    />
    <p :class="`${disable && 'brightness-90'}`">Add New</p>
  </RouterLink>
</template>
