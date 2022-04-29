<template>
<transition name="post">

  <div>
    <PostInfo
      v-if="show"
      :title="title"
      :author="author"
      :cover="cover"
      :updatedAt="updatedAt"
      :body="body"
    />
    <PostLoading v-if="!show" />
  </div>
</transition>
</template>

<script>
import PostLoading from "../components/post/PostLoading.vue";
import PostInfo from "../components/post/PostInfo.vue";
export default {
  components: {
    PostLoading,
    PostInfo,
  },
  props: ["id"],
  data() {
    return {
      show: false,
      title: "",
      updatedAt: "",
      author: {},
      body: "",
      cover: "",
    };
  },
  async activated() {
    try {
      if (window) window.scrollTo(0, 0);
      this.show = false;
      const { data } = await this.$api.getArticleById(this.id);
      let { updatedAt, title, author, body, cover } = data.article;
      this.updatedAt = updatedAt;
      this.title = title;
      this.author = author;
      this.body = body;
      this.cover = cover;
      this.show = true;
      console.log(data.article);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
.post-enter {
  opacity: 0;
}
.post-enter-active {
  transition: opacity .3s linear;
}
body {
  background-color: rgb(243, 243, 243);
}
</style>