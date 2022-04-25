<template>
  <div class="content-wrapper" :class="{ show: show }">
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from './AticleList.vue'
export default {
  components:{
    ArticleList
  },
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
/* .content-enter {
  opacity: 0;
}

.content-enter-active {
  transition: opacity 1s linear;
} */
.content-wrapper {
  /* width: 50vw; */
  /* height: 150vh; */
  background-color: rgba(255, 255, 255, 0.397);
  margin: 0 20vw;
  transition: opacity 1s linear;
  opacity: 0;
  padding-bottom: 1vh;
}

.show {
  opacity: 1;
}
</style>