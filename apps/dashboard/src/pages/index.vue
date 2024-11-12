<script setup lang="ts">
import { helloFromRepo } from "@repo/mypack";
onMounted(() => {
  helloFromRepo();
});
</script>
<template>
  <div>Lets start a</div>
</template>
