<template>
  <aside class="aside">
    <lottie-player
      autoplay
      mode="normal"
      src="animations/spotify.json"
      style="width: 87px; height: 87px; position: relative; bottom: 5px"
    />
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.aside {
  float: left;
  width: 80px;
  display: flex;
  justify-content: center;
  height: calc(100vh - 162px);
  padding-top: 40px;
  position: relative;
  z-index: 2;
  background-color: #000;
}

@media screen and (min-width: 600px) {
  .aside {
    width: 133px;
  }
}
</style>
