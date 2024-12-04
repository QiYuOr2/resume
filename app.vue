<template>
  <div class="app">
    <Sidebar />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import '~/styles/index.scss'

useHead({
  title: '简历编辑器'
})
</script>

<style lang="scss">
.app {
  display: flex;
}

@media print {
  .app .sidebar {
    display: none;
  }
}
</style>