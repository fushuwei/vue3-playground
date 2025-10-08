<script setup lang="ts">
import { ref } from "vue";

const list = ref([1, 2, 3]);
const isShow = ref(true);
</script>

<template>
  <button @click="isShow = !isShow">隐藏列表</button>
  <button @click="list.push(list.length + 1)">添加数字</button>
  <button @click="list.pop()">删除数字</button>
  <button @click="list.reverse()">反转数字</button>

  <ul v-if="isShow && list.length">
    <li v-for="item in list">{{ item }}</li>
  </ul>

  <p v-else-if="list.length">数字列表被隐藏了</p>

  <p v-else>列表为空</p>
</template>

<style scoped>

</style>
