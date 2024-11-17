<script setup lang="ts">
import type { EventItem } from "@/types/mongoSchema";
import { getDate } from "@/utils/utils";
interface Props {
  odd: boolean;
  event: EventItem;
}

const dataStyle = "border-r-1 border-dash-stroke pl-4 py-4 text-center h-full";
const { odd, event } = defineProps<Props>();
const { getFilters } = useEventStore();
console.log(event);
</script>
<template>
  <tr
    :class="`text-dash-TextActive ${odd ? 'bg-dash-listOdd' : 'bg-dash-listEven'} border-1 border-dash-stroke w-full text-lg shadow-lg`"
  >
    <td :class="`${dataStyle}`">
      {{ event.eventName }}
    </td>
    <td d v-show="getFilters().has('Date')" :class="`${dataStyle}`">
      {{ getDate(event.date) }}
    </td>
    <td
      v-show="getFilters().has('Adress')"
      :class="`${dataStyle} text-base py-2`"
    >
      {{
        event.location.length > 0
          ? `ul.${event.street}, "${event.location}"`
          : `ul.${event.street}`
      }}<br />
      {{ event.city }}
    </td>
    <td v-show="getFilters().has('Sold/Cap')" :class="`${dataStyle}`">
      {{ event.sold }}/{{ event.capacity }}
    </td>
    <td v-show="getFilters().has('S/C Ratio')" :class="`${dataStyle}`">
      {{ (event.sold / event.capacity).toFixed(1) }}
    </td>
  </tr>
</template>
