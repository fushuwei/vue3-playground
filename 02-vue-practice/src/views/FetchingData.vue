<script setup lang="ts">
import { ref, watchEffect } from "vue";

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;
const branches = ['main', 'minor'];

const currentBranch = ref('main');
const commits = ref([]);

// 监听代码块内部所有使用的 ref 变量的变化, 下面代码中当 currentBranch.value 变化时会重新运行
watchEffect(async () => {
  if (currentBranch.value) {
    const url = `${API_URL}${currentBranch.value}`;
    commits.value = await (await fetch(url)).json();
  }
});

function truncate(v: string) {
  const newline = v.indexOf('\n');
  return newline > 0 ? v.slice(0, newline) : v;
}

function formatDate(v: string) {
  return v.replace(/T|Z/g, ' ');
}
</script>

<template>
  <h1>Vue.js 最新的 GitHub 提交记录</h1>

  <template v-for="branch in branches">
    <label><input type="radio" :id="branch" name="branch" :value="branch" v-model="currentBranch"/>{{ branch }}</label>&nbsp;&nbsp;
  </template>

  <h1 v-if="currentBranch" class="color-green">vuejs/core@{{ currentBranch }}</h1>

  <ul v-if="commits.length > 0">
    <li v-for="{ html_url, sha, author, commit } in commits" :key="sha">
      <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span><br>
      by <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<style scoped>
.color-green {
  color: green;
}

a {
  text-decoration: none;
  color: #42b883;
}

li {
  line-height: 1.5em;
  margin-bottom: 20px;
}

.author,
.date {
  font-weight: bold;
}
</style>
