<script setup lang="ts">
import getIcons from "@/icons";

const tempList = Array(100).fill({ name: "list" });
const { editIcon, calendarIcon, locationIcon, ticketIcon } = getIcons();

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
          v-for="(_, index) in tempList"
          :odd="index % 2 === 0"
          :cap="10"
          :sold="5"
          :date="12323123123"
          location="41-200 Sosnowiec, ul Chemiczna 15"
          :key="Math.random()"
          name="Time2Work"
        />
      </tbody>
    </table>
  </div>
</template>
