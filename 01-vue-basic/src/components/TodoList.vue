<script setup lang="ts">
const props = defineProps({
  item: Object,
  otherRemark: String,
});
</script>

<template>
  <li style="color: red;">{{ item?.value }} - {{ otherRemark }}</li>
</template>

<style scoped>

</style>
