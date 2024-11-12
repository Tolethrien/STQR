<script setup lang="ts">
import getIcons from "@/icons";
const { listIcon, gridIcon, plusIcon } = getIcons();
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
        :icon="listIcon"
        :size="{ x: 6, y: 6 }"
        :active="getDisplayType === 'list'"
        :click="
          () =>
            store.addEvent({
              capacity: 100,
              date: '02.12.12',
              eventname: 'snobile',
              location: 'Sosnowiec,chmielowa 15',
              sold: 12,
              id: '129024102741274',
            })
        "
        :scale="true"
      />
      <InputsIconButton
        :icon="gridIcon"
        :size="{ x: 6, y: 6 }"
        :active="getDisplayType === 'grid'"
        :click="() => store.removeLastEvent()"
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
