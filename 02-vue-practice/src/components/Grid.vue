<script setup lang="ts">
import { computed, type PropType, ref } from "vue";

interface TableData {
  [key: string]: any;
}

const props = defineProps({
  data: {
    type: Array as PropType<TableData[]>,
    required: true
  },
  columns: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  searchContent: {
    type: String,
    default: ''
  }
});

const sortKey = ref('');
const sortOrders = ref<Record<string, number>>({});
// 初始化 sortOrders
props.columns.forEach(key => {
  sortOrders.value[key] = 1;
});

const filteredData = computed(() => {
  let {data, searchContent} = props;
  if (searchContent) {
    searchContent = searchContent.toLowerCase();
    data = data.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(searchContent) > -1;
      });
    });
  }
  const key = sortKey.value;
  if (key) {
    const order = sortOrders.value[key] ?? 0;
    data = data.slice().sort((a, b) => {
      a = a[key];
      b = b[key];
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }
  return data;
});

function sortBy(key: string) {
  sortKey.value = key;
  let a = sortOrders.value[key] ?? 0;
  sortOrders.value[key] = a * -1;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
  <table v-if="filteredData.length">
    <thead>
    <tr>
      <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
        {{ capitalize(key) }}
        <span class="arrow" :class="(sortOrders[key] ?? 0) > 0 ? 'asc' : 'dsc'"></span>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="entry in filteredData">
      <td v-for="key in columns">
        {{ entry[key] }}
      </td>
    </tr>
    </tbody>
  </table>
  <p v-else>未找到匹配项</p>
</template>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
