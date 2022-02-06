<template>
  <label class="searchBar">
    <div class="searchBar__searchIcon"></div>
    <input type="text" class="searchBar__input" placeholder="Search..." />
    filters
  </label>
</template>

<script>
export default {};
</script>

<style scoped>
.searchBar {
  position: relative;
}
.searchBar__input {
  width: calc(100% - 373px);
  height: 75px;
  border-radius: 50px 0 0 50px;
  padding: 20px 25px 20px 70px;
  box-sizing: border-box;
  border-top: 2px solid #333333;
  border-bottom: 2px solid #333333;
  border-right: none;
  border-left: 2px solid #333333;
  background: #0d0d0d;
  outline: none;
  color: white;
  transition: all 0.2s linear;
}

.searchBar__searchIcon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  top: 52%;
  left: 25px;
  z-index: 2;
}

.searchBar__input::placeholder {
  color: white;
  transition: all 0.2s linear;
  display: block;
}

.searchBar__input:focus.searchBar__input::placeholder {
  color: green;
  transition: all 0.2s linear;
  transform: translateY(-20px);
}
</style>
