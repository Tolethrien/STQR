<script setup lang="ts">
import { helloFromRepo } from "@repo/mypack";
onMounted(() => {
  helloFromRepo();
});
</script>
<template>
  <div class="bg-red-500 text-red-700">Lets start a</div>
</template>
