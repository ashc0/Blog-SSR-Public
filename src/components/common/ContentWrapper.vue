<template>
  <div class="content-wrapper" :class="{ show: show }">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    setTimeout(() => {
      this.show = true;
    });
  },
};
</script>


<style scoped>
.content-wrapper {
  background-color: rgba(255, 255, 255, 0.397);
  margin: 0 20vw;
  transition: opacity 1s linear;
  opacity: 0;
  padding-bottom: 1vh;
  margin-top: 9vh;
}

.show {
  opacity: 1;
}
</style>