<script setup lang="ts">
import HelloWorld from "@/views/HelloWorld.vue";
import HandingInput from "@/views/HandingInput.vue";
import AttributeBind from "@/views/AttributeBind.vue";
import ConditionalsAndLoops from "@/views/ConditionalsAndLoops.vue";
</script>

<template>
  <h1># 01 - 跟 Vue 说 Hello World！</h1>
  <HelloWorld/>

  <h1># 02 - 这个示例展示了如何通过 v-on 指令处理用户输入</h1>
  <HandingInput/>

  <h1># 03 - 这个示例展示了如何通过 v-bind 指令绑定动态属性</h1>
  <AttributeBind/>

  <h1># 04 - 通过 v-if 和 v-for 指令条件性地或循环地渲染内容</h1>
  <ConditionalsAndLoops/>
</template>

<style scoped></style>
