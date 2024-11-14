<script setup lang="ts">
import getIcons from "@/utils/icons";
const { listIcon, gridIcon, gridPlusIcon, plusIcon } = getIcons();
const getDisplayType: string = "list";
const store = useEventStore();
</script>

<template>
  <ContentWindowVerticalBar>
    <InputsSearchbar />
    <div class="flex h-full items-center gap-4">
      <InputsSortedBy />
      <InputsFilteredBy />
    </div>
    <div class="flex gap-2">
      <InputsIconButton
        :icon="gridIcon"
        :size="{ x: 6, y: 6 }"
        :active="getDisplayType === 'grid'"
        :click="() => {}"
        :scale="true"
      />
      <InputsIconButton
        :icon="listIcon"
        :size="{ x: 6, y: 6 }"
        :active="getDisplayType === 'list'"
        :click="
          () => {
            store.addEvent({
              capacity: 10,
              date: new Date(),
              eventName: 'Apart',
              location: Math.random().toFixed(3),
              sold: 1,
            });
            store.fetchEvents();
          }
        "
        :scale="true"
      />
      <InputsIconButton
        :icon="gridPlusIcon"
        :size="{ x: 6, y: 6 }"
        :active="getDisplayType === 'grid'"
        :click="() => {}"
        :scale="true"
      />
    </div>
    <RouterLink
      :to="$route.path + '/add'"
      class="bg-dash-accent text-dash-TextActive flex flex-col items-center justify-center p-2 font-medium"
    >
      <img :src="plusIcon" alt="buttonAddIcon" />
      <p>Add New</p>
    </RouterLink>
  </ContentWindowVerticalBar>
  <ContentWindowTable />
</template>
