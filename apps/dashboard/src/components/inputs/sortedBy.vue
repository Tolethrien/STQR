<script setup lang="ts">
import getIcons from "@/utils/icons";
interface Props {
  disable?: boolean;
}
const { disable = false } = defineProps<Props>();
const { dropDownIcon } = getIcons();
const { getAllSortedOptions, setSorted } = useEventStore();
</script>
<template>
  <div
    :class="`bg-dash-sec shadow-button-inner relative flex h-2/4 max-w-52 items-center rounded-md ${disable && 'brightness-75 pointer-events-none'}`"
  >
    <select
      id="select-input"
      name="select-input"
      class="text-dash-TextActive placeholder:text-dash-TextInactive cursor-pointer *:bg-dash-sec h-full w-full appearance-none text-ellipsis bg-transparent pl-2 pr-10 outline-none"
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
