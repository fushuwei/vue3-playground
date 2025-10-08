<script setup lang="ts">
import { ref } from "vue";
import TodoList from "@/components/TodoList.vue";

const list1 = ref([
  {key: 1, value: '吃饭'},
  {key: 2, value: '工作'},
  {key: 3, value: '睡觉'}
]);

const list2 = ref([
  {key: 1, value: '打篮球', remark: '擅长'},
  {key: 2, value: '踢足球', remark: '感兴趣'},
  {key: 3, value: '游泳', remark: '喜爱'}
]);
</script>

<template>
  <ol>
    <li v-for="item in list1">{{ item.value }}</li>
    <li>------ 分界线 ------</li>
    <TodoList v-for="item in list2"
              :item="item"
              :other-remark="item.remark"
              :key="item.key"/>
  </ol>
</template>

<style scoped>

</style>
