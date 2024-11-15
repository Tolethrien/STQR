<script setup lang="ts">
import getIcons from "@/utils/icons";

const { editIcon, calendarIcon, locationIcon, ticketIcon } = getIcons();
const { getEventsBySortedSearch, getFilters } = useEventStore();
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
          <th v-show="getFilters().has('Date')">
            <CommonTextWithIcon :icon="calendarIcon" text="Date" />
          </th>
          <th v-show="getFilters().has('Location')">
            <CommonTextWithIcon :icon="locationIcon" text="Location" />
          </th>
          <th v-show="getFilters().has('Sold/Cap')">
            <CommonTextWithIcon :icon="ticketIcon" text="Sold/Cap" />
          </th>
        </tr>
      </thead>
      <tbody>
        <ContentWindowTableItem
          v-for="(event, index) in sortedFilteredEvents"
          :odd="index % 2 === 0"
          :cap="event.capacity"
          :sold="event.sold"
          :date="event.date"
          :location="event.location"
          :key="event.id"
          :event-name="event.eventName"
          :capacity="event.capacity"
          :city="event.city"
          :street="event.street"
        />
      </tbody>
    </table>
  </div>
</template>
