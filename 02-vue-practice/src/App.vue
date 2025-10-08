<script setup lang="ts">

</script>

<template>
  <p><strong>当前路由:</strong> {{ $route.fullPath }}</p>

  <h1>
    <RouterLink to="/markdownEditor">Markdown Editor</RouterLink>
  </h1>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped></style>
