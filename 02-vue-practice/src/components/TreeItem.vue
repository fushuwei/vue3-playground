<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  model: Object
});

const isOpen = ref(false);
const isFolder = computed(() => props.model?.children && props.model.children.length);

function addChildren() {
  console.log(isFolder.value);
  if (!isFolder.value) {
    (props.model as any).children = [];
    props.model?.children.push({name: 'new stuff'});
    isOpen.value = true;
  }
}
</script>

<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="isOpen = !isOpen"
      @dblclick="addChildren">
      {{ props.model?.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeItem
        class="item"
        v-for="model in props.model?.children"
        :model="model">
      </TreeItem>
    </ul>
  </li>
</template>

<style scoped>
.bold {
  font-weight: bold;
}
</style>
