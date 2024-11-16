<script setup lang="ts">
import getIcons from "@/utils/icons";
const { listIcon, gridIcon, gridPlusIcon } = getIcons();
const getDisplayType: string = "list";
const store = useEventStore();
</script>

<template>
  <CommonVerticalBar>
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
          () =>
            store.addEvent({
              capacity: 1,
              date: new Date(),
              eventName: 'Samba',
              city: 'Sosnowiec',
              location: 'Chmielnia',
              sold: 1,
              street: 'Chmielowa',
            })
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
    <InputsAddNewButton :link="$route.path + '/add'" />
  </CommonVerticalBar>
  <ContentWindowTable />
</template>
