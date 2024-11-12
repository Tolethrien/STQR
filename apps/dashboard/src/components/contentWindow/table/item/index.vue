<script setup lang="ts">
interface Props {
  odd: boolean;
  name: string;
  date: number;
  location: string;
  sold: number;
  cap: number;
}
const dataStyle = "border-r-1 border-dash-stroke pl-4 py-4 text-center h-full";
const { cap, date, location, name, odd, sold } = defineProps<Props>();
// const { getFilterList } = getFromEventStore("filters");
</script>
<template>
  <tr
    :class="`text-dash-TextActive ${odd ? 'bg-dash-listOdd' : 'bg-dash-listEven'} border-1 border-dash-stroke w-full text-lg shadow-lg`"
  >
    <td :class="`${dataStyle}`">
      {{ name }}
    </td>
    <td :class="`${dataStyle}`">
      {{ date }}
    </td>
    <td :class="`${dataStyle}`">
      {{ location }}
    </td>
    <td :class="`${dataStyle}`">{{ sold }}/{{ cap }}</td>
    <td class="w-16 px-4">
      <button class="h-full w-full">...</button>
    </td>
  </tr>
</template>
