<template>
<transition name="home">
  <div>
    <Background />
    <ContentWrapper>
      <slot />
    </ContentWrapper>
  </div>
</transition>
</template>

<script>
import Background from "./Background.vue";
import ContentWrapper from "./ContentWrapper.vue"
export default {
  components: {
    Background,
    ContentWrapper
  }
};
</script>

<style scoped>
.home-leave-to {
  opacity: 0;
}

.home-leave-active {
  transition: opacity .3s linear;
}
</style>