<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style scoped>
.main {
  height: calc(100vh - 40px);
  margin-left: 80px;
  padding-top: 40px;
  width: calc(100% - 80px);
}

@media screen and (min-width: 600px) {
  .main {
    margin-left: 133px;
    width: calc(100% - 133px);
  }
}
</style>
