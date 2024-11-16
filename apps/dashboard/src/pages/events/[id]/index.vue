<script setup lang="ts">
interface Props {
  id: string;
}
// const { id } = defineProps<Props>();
const {
  params: { id },
} = useRoute();
// console.log($route.path);
</script>
<template>this is iD:{{ id }}</template>
