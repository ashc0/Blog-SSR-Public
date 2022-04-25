<template>
  <div>
    <Background />
    <ContentWrapper />
  </div>
</template>

<script>
import Background from "../components/Background.vue";
import ContentWrapper from "../components/home/ContentWrapper.vue";
export default {
  components: {
    Background,
    ContentWrapper,
  },
};
</script>