<script setup lang="ts">
import { ref } from "vue";
import TreeItem from "@/components/TreeItem.vue";

const treeData = ref({
  name: 'My Tree',
  children: [
    {name: 'hello'},
    {name: 'world'},
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            {name: 'hello'},
            {name: 'world'}
          ]
        },
        {name: 'hello'},
        {name: 'world'},
        {
          name: 'child folder',
          children: [
            {name: 'hello'},
            {name: 'world'}
          ]
        }
      ]
    }
  ]
});
</script>

<template>
  <ul>
    <TreeItem class="item" :model="treeData"/>
  </ul>
</template>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}

.bold {
  font-weight: bold;
}
</style>
