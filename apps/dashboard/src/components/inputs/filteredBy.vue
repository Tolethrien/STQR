<script setup lang="ts">
import { ref } from "vue";
import getIcons from "@/utils/icons";

const isDropdownOpen = ref(false);
const dropDownElement = ref<HTMLElement>();
const buttonElement = ref<HTMLElement>();
const { dropDownIcon } = getIcons();
const { toggleFilter, getFilters } = useEventStore();
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
    class="bg-dash-sec shadow-button-inner relative flex h-2/4 w-28 items-center rounded-md"
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
        <label class="flex items-center">
          <input
            type="checkbox"
            value="Date"
            :checked="getFilters().has('Date')"
            @change="() => toggleFilter('Date')"
            class="mr-2 checked:bg-black checked:text-black"
          />
          Date
        </label>
        <label class="flex items-center">
          <input
            type="checkbox"
            value="Location"
            :checked="getFilters().has('Location')"
            @change="() => toggleFilter('Location')"
            class="mr-2"
          />
          location
        </label>
        <label class="flex items-center">
          <input
            type="checkbox"
            value="Sold/Cap"
            :checked="getFilters().has('Sold/Cap')"
            @change="() => toggleFilter('Sold/Cap')"
            class="mr-2"
          />
          Sold/Cap
        </label>
      </form>
    </div>
  </div>
</template>
