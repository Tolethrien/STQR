<script setup lang="ts">
import getIcons from "@/utils/icons";

const { editIcon, calendarIcon, locationIcon, ticketIcon } = getIcons();
const { getEventsBySortedSearch, getFilters, getAllFilterOptions } =
  useEventStore();
const sortedFilteredEvents = computed(() => getEventsBySortedSearch());
</script>
<template>
  <div class="overflow-y-auto">
    <table class="w-full border-separate border-spacing-y-2">
      <thead>
        <tr class="text-dash-TextActive text-lg *:px-2">
          <th>
            <CommonTextWithIcon :icon="editIcon" text="Name" />
          </th>
          <th
            v-for="(filter, index) of getAllFilterOptions()"
            :key="index"
            v-show="getFilters().has(filter)"
          >
            <CommonTextWithIcon :icon="editIcon" :text="filter" />
          </th>
        </tr>
      </thead>
      <tbody>
        <ContentWindowTableItem
          v-for="(event, index) in sortedFilteredEvents"
          :odd="index % 2 === 0"
          :event="event"
        />
      </tbody>
    </table>
  </div>
</template>
