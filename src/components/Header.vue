<template>
  <div
    id="header-bar"
    :style="{ backgroundColor: this.$route.path === '/' ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.9)' }"
  ></div>
</template>

<script>
export default {};
</script>

<style scoped>
#header-bar {
  height: 5.5vh;
  /* background-color: rgba(255, 255, 255, 0.8); */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: background-color .3s ease;
}
</style>