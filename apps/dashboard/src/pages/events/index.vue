<script setup lang="ts">
import getIcons from "@/utils/icons";
const { listIcon, gridIcon, gridPlusIcon, plusIcon } = getIcons();
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
        :click="() => {}"
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
    <InputsAccentButton
      type="route"
      :icon="plusIcon"
      text="Add New"
      :action="{ link: $route.path + '/add' }"
      :css="{ iconPos: 'flex-col', shell: 'p-2' }"
    />
  </CommonVerticalBar>
  <ContentWindowTable />
</template>
