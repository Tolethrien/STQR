<script setup lang="ts">
interface Props {
  odd: boolean;
  name: string;
  date: string;
  location: string;
  sold: number;
  cap: number;
}
const dataStyle = "border-r-1 border-dash-stroke pl-4 py-4 text-center h-full";
const { cap, date, location, name, odd, sold } = defineProps<Props>();
const { getFilters } = useEventStore();
</script>
<template>
  <tr
    :class="`text-dash-TextActive ${odd ? 'bg-dash-listOdd' : 'bg-dash-listEven'} border-1 border-dash-stroke w-full text-lg shadow-lg`"
  >
    <td :class="`${dataStyle}`">
      {{ name }}
    </td>
    <td d v-show="getFilters().has('Date')" :class="`${dataStyle}`">
      {{ date }}
    </td>
    <td v-show="getFilters().has('Location')" :class="`${dataStyle}`">
      {{ location }}
    </td>
    <td v-show="getFilters().has('Sold/Cap')" :class="`${dataStyle}`">
      {{ sold }}/{{ cap }}
    </td>
  </tr>
</template>
