<script setup lang="ts">
import { ref } from "vue";

const message1 = ref("Hello World!");
const message2 = "Hello World!";

function changeMessage1() {
  message1.value = "Hello World!";
}
</script>

<template>
  <p>我是响应式变量: {{ message1 }}</p>
  <button @click="message1+='+1'">试试, 可以改变内容</button>
  <button @click="changeMessage1">还原</button>
  <p>我是普通变量: {{ message2 }}</p>
  <button @click="message2+=1">试试, 无法改变内容</button>
</template>

<style scoped>

</style>
