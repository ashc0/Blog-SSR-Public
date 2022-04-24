<template>
  <div class="cover-wrapper" :style="{ backgroundImage: img }">
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    img() {
      let src = this.$store.getters.context.src;
      if (this.$route.path === "/") return `url(${src})`;
      return `-webkit-cross-fade(url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==), url(${src}), 40%)`;
    },
  }
};
</script>

<style scoped>
.cover-wrapper {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-position-x: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
</style>