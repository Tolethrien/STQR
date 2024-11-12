<script setup lang="ts"></script>
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
      <SideBarButton link="Events" icon="events" />
      <SideBarButton link="Users" icon="users" />
      <SideBarButton link="Analytics" icon="alaytics" />
      <SideBarButton link="Settings" icon="settings" />
    </nav>
  </aside>
</template>
