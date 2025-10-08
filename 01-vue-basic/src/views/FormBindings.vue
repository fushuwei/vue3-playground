<script setup lang="ts">
import { ref } from "vue";

const textContent = ref("请输入...");

const isChecked = ref(false);

const checkboxValues = ref(['001', '002']);

const radioValues = ref('CN');

const singleSelectedValue = ref('CN');

const multiSelectedValue = ref(['CN', 'US']);
</script>

<template>
  <p><input type="text" v-model="textContent"/> <span style="color: red;">{{ textContent }}</span></p>

  <p><input type="checkbox" id="100" v-model="isChecked"/><label for="100" style="color: red;">是否选中: {{
      isChecked
    }}</label></p>

  <p>
    <input type="checkbox" id="zhangsan" value="001" v-model="checkboxValues"/><label for="zhangsan">张三(001)</label>&nbsp;
    <input type="checkbox" id="lisi" value="002" v-model="checkboxValues"/><label for="lisi">李四(002)</label>&nbsp;
    <input type="checkbox" id="wangwu" value="003" v-model="checkboxValues"/><label for="wangwu">王五(003)</label>&nbsp;&nbsp;
    <span style="color: red;">已勾选: {{ checkboxValues }}</span>
  </p>

  <p>
    <input type="radio" id="cn" value="CN" v-model="radioValues"/><label for="cn">中国(CN)</label>&nbsp;
    <input type="radio" id="us" value="US" v-model="radioValues"/><label for="us">美国(US)</label>&nbsp;&nbsp;
    <span style="color: red;">已选择: {{ radioValues }}</span>
  </p>

  <p>
    <select v-model="singleSelectedValue" style="width: 100px">
      <option>请选择...</option>
      <option value="CN">中国🇨🇳</option>
      <option value="US">美国🇺🇸</option>
      <option value="EN">英国🇬🇧</option>
    </select>&nbsp;&nbsp;
    <span style="color: red;">已选择: {{ singleSelectedValue }}</span>
  </p>

  <p>
    <select v-model="multiSelectedValue" multiple style="width: 100px">
      <option>请选择...</option>
      <option value="CN">中国🇨🇳</option>
      <option value="US">美国🇺🇸</option>
      <option value="EN">英国🇬🇧</option>
    </select>&nbsp;&nbsp;
    <span style="color: red;">已选择: {{ multiSelectedValue }}</span>
  </p>
</template>

<style scoped>

</style>
