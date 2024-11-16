<script setup lang="ts">
import getIcons from "@/utils/icons";
const { usersIcon, analyticsIcon, eventsIcon, settingsIcon } = getIcons();
const ICONS = {
  users: usersIcon,
  alaytics: analyticsIcon,
  events: eventsIcon,
  settings: settingsIcon,
};
interface Props {
  link: string;
  icon: keyof typeof ICONS;
  showText?: boolean;
}
const { link, icon, showText = true } = defineProps<Props>();
const route = useRoute();

const isActive = computed(() =>
  route.path.toLowerCase().includes(link.toLowerCase())
);
</script>
<template>
  <RouterLink
    :to="`/${link}`"
    :class="`${isActive ? 'bg-dash-accent' : 'brightness-75'} flex flex-col items-center justify-center rounded-r-md ${showText ? 'px-1' : 'px-10'} py-3 transition-all`"
  >
    <img :src="ICONS[icon]" alt="buttonIcon" class="h-8 w-8" />
    <p
      :class="`text-dash-TextActive ${showText && 'opacity-0'} transition-all`"
    >
      {{ link }}
    </p>
  </RouterLink>
</template>
