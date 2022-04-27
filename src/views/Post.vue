<template>
  <div class="post">
    <div class="loaded" v-if="show">
      <div class="cover">
        <img :src="article.cover" />
      </div>
      <div class="content">
        <div class="title">
          <span>{{ article.title }} </span>
        </div>
        <div class="info">
          <div class="avatar">
            <img :src="article.author.avatar" />
          </div>
          <div class="about">
            <div class="text username">
              <span>{{ article.author.username }}</span>
            </div>
            <div class="text update">
              <span>
                {{ new Date(parseInt(article.updatedAt)).getFullYear() }}-{{
                  new Date(parseInt(article.updatedAt)).getMonth()
                }}-{{ new Date(parseInt(article.updatedAt)).getDate() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PostLoading v-else />
  </div>
</template>

<script>
import PostLoading from "../components/post/PostLoading.vue";
export default {
  components: {
    PostLoading,
  },
  props: ["id"],
  data() {
    return {
      article: {},
      show: false,
    };
  },
  async activated() {
    try {
      if (window) window.scrollTo(0, 0);
      this.article = {};
      const { data } = await this.$api.getArticleById(this.id);
      this.article = data.article;
      this.show = true;
      console.log(this.article);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
body {
  background-color: rgb(243, 243, 243);
}
.post > .loaded {
  width: 40vw;
  background-color: #fff;
  /* height: 500px; */
  top: 7vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.post > .loaded > .cover {
  width: 100%;
}

.post > .loaded > .cover > .cover-loading {
  height: 22.5vw;
  background-color: rgb(214, 211, 211);
}

.post > .loaded > .cover img {
  width: 100%;
}

.post > .loaded > .content {
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
}

.post > .loaded > .content > .title {
  font-size: 30px;
  font-family: "黑体";
  font-weight: 500;
  height: 5vh;
  line-height: 5vh;
}

.post > .loaded > .content > .info {
  /* background-color: red; */
  height: 7vh;
  display: flex;
  align-items: center;
}

.post > .loaded > .content > .info > .avatar {
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  overflow: hidden;
  background-color: #999;
  border: 1px solid #999;
}

.post > .loaded > .content > .info > .avatar img {
  width: 100%;
  /* height: 100%; */
}

.post > .loaded > .content > .info > .about {
  flex-grow: 1;
  margin-left: 10px;
  /* height: 100%; */
}

.post > .loaded > .content > .info > .about > .username {
  position: relative;
  bottom: 10px;
  color: rgba(0, 0, 0, 0.864);
  font-family: "宋体";
  font-weight: bold;
  font-size: 18px;
}

.post > .loaded > .content > .info > .about > .update {
  position: relative;
  top: 5px;
  font-size: 14px;
  font-family: "宋体";
}
</style>