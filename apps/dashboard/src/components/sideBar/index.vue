<script setup lang="ts">
import getIcons from "@/utils/icons";
const { arrowMore } = getIcons();
const textVisible = ref<boolean>(false);
</script>
<template>
  <aside
    class="bg-dash-sec border-dash-stroke border-y-1 border-r-1 shadow-window-4 my-auto flex h-full flex-col rounded-r-md"
  >
    <p
      class="text-dash-accent py-6 text-center text-2xl font-semibold underline"
    >
      LOGO
    </p>
    <nav class="flex h-full flex-col gap-4">
      <SideBarButton link="Events" icon="events" :show-text="textVisible" />
      <SideBarButton link="Users" icon="users" :show-text="textVisible" />
      <SideBarButton
        link="Analytics"
        icon="alaytics"
        :show-text="textVisible"
      />
      <SideBarButton link="Settings" icon="settings" :show-text="textVisible" />
    </nav>
    <div class="flex gap-4 w-full items-center p-2">
      <button @:click="() => (textVisible = !textVisible)">
        <img
          :src="arrowMore"
          :class="`${textVisible && 'rotate-180'} transition-all`"
        />
      </button>
    </div>
  </aside>
</template>
