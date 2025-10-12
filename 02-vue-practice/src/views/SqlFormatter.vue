<!--
  官网示例: https://sql-formatter-org.github.io/sql-formatter/
 -->
<script setup lang="ts">
import { computed, ref } from "vue";
import { format } from "sql-formatter";
import { debounce } from "lodash-es";

const input = ref("select id,name,age from users where age>20 and status='active' order by age desc");
const output = computed(() => {
  return format(input.value, {language: 'sql', tabWidth: 2, keywordCase: 'upper',});
});

const updateInput = debounce((e) => {
  input.value = e.target.value;
}, 1000);
</script>

<template>
  <textarea :value="input" @input="updateInput"></textarea>
  <textarea v-model="output" readonly/>
</template>

<style scoped>
textarea {
  width: 800px;
  height: 700px;
  border: 1px solid #ccc;
  margin: 30px 0 0 30px;
  padding: 20px;
}
</style>
