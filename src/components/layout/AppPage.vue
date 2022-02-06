<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style scoped>
.main {
  height: calc(100vh - 115px);
  padding-top: 30px;
  box-sizing: border-box;
  margin-left: 80px;
  width: calc(100% - 80px);
}

@media screen and (min-width: 600px) {
  .main {
    margin-left: 133px;
    width: calc(100% - 133px);
  }
}
</style>
