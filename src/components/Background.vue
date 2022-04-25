<template>
  <div class="cover-wrapper" :style="{ backgroundImage: img, zIndex: main ? 0 : -1 }">
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    img() {
      let src = this.$store.getters.context.src;
      if (this.$route.path === "/") return `url(${src})`;
      // return `-webkit-cross-fade(url(data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=), url(${src}), 60%)`;
      return `-webkit-cross-fade(url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7), url(${src}), 60%)`;
    },
    main() {
      return this.$route.path === "/"
    }
  }
};
</script>

<style>
.cover-wrapper {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-position-x: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
</style>