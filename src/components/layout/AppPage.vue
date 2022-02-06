<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style scoped>
.main {
  height: calc(100vh - 40px);
  margin-left: 133px;
  padding-top: 40px;
  width: calc(100% - 133px);
}
</style>
