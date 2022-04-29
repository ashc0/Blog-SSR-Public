<template>
<transition name="home">
  <ContentBg>
    <ArticleList />
  </ContentBg>
</transition>
</template>

<script>
import ContentBg from "../components/common/ContentBg.vue";
import ArticleList from "../components/home/AticleList.vue";
export default {
  components: {
    ContentBg,
    ArticleList,
  },
  data() {
    return {
      y: 0,
    };
  },
  activated() {
    window && window.scrollTo(0, this.y);
  },
  deactivated() {
    this.y = window.scrollY;
  },
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