<script setup lang="ts">
import getIcons from "@/icons";
// import { getFromEventStore, type SortType } from "@/stores/eventsStore";

const { dropDownIcon } = getIcons();

const options: unknown[] = ["A-Z", "Z-A", "Date", "Sold", "Cap"];
// const { getSortedBy, setSortedBy } = getFromEventStore("sortedBy");
</script>
<template>
  <div
    class="bg-dash-sec shadow-button-inner relative flex h-2/4 max-w-52 items-center rounded-md"
  >
    <select
      id="select-input"
      name="select-input"
      class="text-dash-TextActive placeholder:text-dash-TextInactive *:bg-dash-sec h-full w-full appearance-none text-ellipsis bg-transparent pl-2 pr-10 outline-none"
      v-model="options"
      @change="(event) => console.log(event)"
    >
      <option v-for="option in options" :value="option" :key="Math.random()">
        {{ `Sorted By: ${option}` }}
      </option>
    </select>
    <img
      :src="dropDownIcon"
      alt=""
      class="pointer-events-none absolute right-1 top-1/2 h-4 w-6 -translate-y-1/2"
    />
  </div>
</template>
