<script setup lang="ts">
import "../index.css";
const store = useEventStore();

onMounted(() => {
  store.fetchEvents();
});
</script>

<template>
  <div class="bg-dash-main flex h-full w-full gap-4 p-2 pl-0">
    <SideBar />
    <ContentWindow>
      <slot></slot>
    </ContentWindow>
  </div>
</template>
