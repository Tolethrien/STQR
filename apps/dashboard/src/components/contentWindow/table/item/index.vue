<script setup lang="ts">
import type { EventItem } from "@/types/mongoSchema";
import { getDate } from "@/utils/utils";
interface Props extends Omit<EventItem, "id"> {
  odd: boolean;
}
const dataStyle = "border-r-1 border-dash-stroke pl-4 py-4 text-center h-full";
const { date, location, eventName, odd, sold, city, capacity, street } =
  defineProps<Props>();
const { getFilters } = useEventStore();
</script>
<template>
  <tr
    :class="`text-dash-TextActive ${odd ? 'bg-dash-listOdd' : 'bg-dash-listEven'} border-1 border-dash-stroke w-full text-lg shadow-lg`"
  >
    <td :class="`${dataStyle}`">
      {{ eventName }}
    </td>
    <td d v-show="getFilters().has('Date')" :class="`${dataStyle}`">
      {{ getDate(date) }}
    </td>
    <td
      v-show="getFilters().has('Adress')"
      :class="`${dataStyle} text-base py-2`"
    >
      {{ location.length > 0 ? `ul.${street}, "${location}` : `ul.${street}`
      }}<br />
      {{ city }}
    </td>
    <td v-show="getFilters().has('Sold/Cap')" :class="`${dataStyle}`">
      {{ sold }}/{{ capacity }}
    </td>
  </tr>
</template>
