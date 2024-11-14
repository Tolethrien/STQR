<script setup lang="ts">
import getIcons from "@/icons";

const { dropDownIcon } = getIcons();
const { getAllSortedOptions, getSorted, setSorted } = useEventStore();
</script>
<template>
  <p>{{ getSorted() }}</p>
  <div
    class="bg-dash-sec shadow-button-inner relative flex h-2/4 max-w-52 items-center rounded-md"
  >
    <select
      id="select-input"
      name="select-input"
      class="text-dash-TextActive placeholder:text-dash-TextInactive *:bg-dash-sec h-full w-full appearance-none text-ellipsis bg-transparent pl-2 pr-10 outline-none"
      @change="
        (event) =>
          setSorted((event.target as HTMLSelectElement).value as EventSortType)
      "
    >
      <option
        v-for="(option, index) of getAllSortedOptions()"
        :value="option"
        :key="index"
      >
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
