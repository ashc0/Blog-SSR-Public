<template>
  <ContentBg>
    <FragmentList />
  </ContentBg>
</template>

<script>
import ContentBg from "../components/common/ContentBg.vue";
import FragmentList from "../components/fragment/FragmentList.vue"
export default {
  components: {
    ContentBg,
    FragmentList
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