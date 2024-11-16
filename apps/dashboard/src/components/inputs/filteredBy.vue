<script setup lang="ts">
import { ref } from "vue";
import getIcons from "@/utils/icons";
interface Props {
  disable?: boolean;
}
const { disable = false } = defineProps<Props>();
const isDropdownOpen = ref(false);
const dropDownElement = ref<HTMLElement>();
const buttonElement = ref<HTMLElement>();
const { dropDownIcon } = getIcons();
const { toggleFilter, getFilters, getAllFilterOptions } = useEventStore();

const toggleDropdown = () => {
  if (!isDropdownOpen.value) {
    window.addEventListener("mousedown", handleClickOutSide);
  }
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleClickOutSide = (event: MouseEvent) => {
  const node = event.target as Node;
  if (
    !dropDownElement.value?.contains(node) &&
    !buttonElement.value?.contains(node)
  ) {
    window.removeEventListener("mousedown", handleClickOutSide);
    isDropdownOpen.value = false;
  }
};
</script>
<template>
  <div
    :class="`bg-dash-sec shadow-button-inner relative flex h-2/4 w-28 items-center rounded-md ${disable && 'brightness-75 pointer-events-none'}`"
  >
    <button
      @click.prevent="toggleDropdown"
      ref="buttonElement"
      class="flex h-full w-full items-center justify-center bg-transparent px-2"
    >
      <span
        class="text-dash-TextActive *:bg-dash-sec flex h-full w-full items-center bg-transparent"
        >Filters</span
      >
      <img
        :src="dropDownIcon"
        alt="Filter Icon"
        class="pointer-events-none h-4 w-6"
      />
    </button>

    <div
      v-show="isDropdownOpen"
      class="bg-dash-sec border-1 border-dash-stroke text-dash-TextActive shadow-window-4 absolute right-0 top-full z-10 mt-2 w-40 rounded-md p-4"
      ref="dropDownElement"
    >
      <form class="flex flex-col gap-2">
        <label
          class="flex items-center"
          v-for="(filterName, index) in getAllFilterOptions()"
          :key="index"
        >
          <input
            type="checkbox"
            :value="filterName"
            :checked="getFilters().has(filterName)"
            @change="() => toggleFilter(filterName)"
            class="mr-2 checked:bg-black checked:text-black"
          />
          {{ filterName }}
        </label>
      </form>
    </div>
  </div>
</template>
