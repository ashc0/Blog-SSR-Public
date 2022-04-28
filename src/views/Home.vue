<template>
  <!-- <transition name="home"> -->
  <!-- <div> -->
  <ContentBg>
    <ArticleList />
  </ContentBg>
  <!-- </div> -->
  <!-- </transition> -->
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