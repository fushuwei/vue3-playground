<script setup lang="ts">
import { ref } from "vue";
import Grid from "@/components/Grid.vue";

const searchContent = ref('');
const gridColumns = ['name', 'power'];
const gridData = [
  {name: '李小龙', power: 9000},
  {name: '成龙', power: 7000},
  {name: '李连杰', power: 8000}
];
</script>

<template>
  搜索条件: <input name="query" v-model="searchContent">

  <Grid :columns="gridColumns" :data="gridData" :search-content="searchContent"/>
</template>

<style scoped>

</style>
