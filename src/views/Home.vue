<template>
<transition name="home">
  <div>
    <Background />
    <ContentWrapper />
  </div>
</transition>
</template>

<script>
import Background from "../components/Background.vue";
import ContentWrapper from "../components/home/ContentWrapper.vue";
export default {
  components: {
    Background,
    ContentWrapper,
  },
  data() {
    return {
      y: 0
    }
  },
  activated(){
    window && window.scrollTo(0, this.y)
  },
  deactivated() {
    this.y = window.scrollY
  }
};
</script>

<style scoped>
.home-leave-to {
  opacity: 0;
}

.home-leave-active {
  transition: opacity .5s linear;
}
</style>