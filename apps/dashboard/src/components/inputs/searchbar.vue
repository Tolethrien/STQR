<script setup lang="ts">
import getIcons from "@/utils/icons";

const { loopIcon } = getIcons();
const { setSearch } = useEventStore();
</script>
<template>
  <div
    class="bg-dash-sec shadow-button-inner relative h-2/4 flex-grow rounded-md"
  >
    <input
      class="text-dash-TextActive placeholder:text-dash-TextInactive h-full w-[80%] bg-transparent pl-2 outline-none"
      placeholder="Search... "
      @input="(e) => setSearch((e.target as HTMLInputElement).value)"
    />
    <img
      :src="loopIcon"
      alt=""
      class="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2"
    />
  </div>
</template>
