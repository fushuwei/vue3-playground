<script setup lang="ts">
import { ref } from "vue";

const message = ref("Hello World");

function reverse() {
  message.value = message.value.split('').reverse().join('');
}

function append() {
  message.value += '!';
}

function notify() {
  alert('超链接被阻止跳转.');
}
</script>

<template>
  <p>{{ message }}</p>
  <button @click="reverse">翻转</button>
  <button @click="append">追加</button>

  <a href="https://vuejs.org" @click.prevent="notify">
    会调用 e.preventDefault() 的超链接
  </a>
</template>

<style scoped>

</style>
