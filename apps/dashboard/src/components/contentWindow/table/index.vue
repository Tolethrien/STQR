<script setup lang="ts">
import getIcons from "@/icons";

const tempList = Array(100).fill({ name: "list" });
const { editIcon, calendarIcon, locationIcon, ticketIcon } = getIcons();
const store = useEventStore();
// const filteredList = computed(() => {
//   return tempList.filter((val) => val.name.includes(getSearchParam.value));
// });
</script>
<template>
  <div class="overflow-y-auto">
    <table class="w-full border-separate border-spacing-y-2">
      <thead>
        <tr class="text-dash-TextActive text-lg *:px-2">
          <th>
            <CommonTextWithIcon :icon="editIcon" text="Name" />
          </th>
          <th>
            <CommonTextWithIcon :icon="calendarIcon" text="Date" />
          </th>
          <th>
            <CommonTextWithIcon :icon="locationIcon" text="Location" />
          </th>
          <th>
            <CommonTextWithIcon :icon="ticketIcon" text="Sold/Cap" />
          </th>
        </tr>
      </thead>
      <tbody>
        <ContentWindowTableItem
          v-for="(event, index) in store.events"
          :odd="index % 2 === 0"
          :cap="event.capacity"
          :sold="event.sold"
          :date="event.date"
          :location="event.location"
          :key="event._id"
          :name="event.eventName"
        />
      </tbody>
    </table>
  </div>
</template>
