<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style scoped>
.main {
  width: calc(100% - 133px);
  height: 100vh;
  margin-left: 133px;
}
</style>
