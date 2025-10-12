<script setup lang="ts">

</script>

<template>
  <h1>菜单</h1>
  <h1>
    <ol>
      <p>
        <li>
          <RouterLink to="/markdown-editor">Markdown 编辑器</RouterLink>
        </li>
      </p>
      <p>
        <li>
          <RouterLink to="/fetching-data">获取数据</RouterLink>
        </li>
      </p>
      <p>
        <li>
          <RouterLink to="/grid">可复用网格组件 (Grid)</RouterLink>
        </li>
      </p>
      <p>
        <li>
          <RouterLink to="/tree">树状视图</RouterLink>
        </li>
      </p>
      <p>
        <li>
          <RouterLink to="/sql-formatter">SQL 格式化</RouterLink>
        </li>
      </p>
    </ol>
  </h1>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
