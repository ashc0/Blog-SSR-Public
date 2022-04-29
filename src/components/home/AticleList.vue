<template>
  <div class="article-list-wrapper">
    <div class="recent">最近文章</div>
    <ArticleListLoading v-if="!articleList.length"/>
    <ul v-else @click="read">
      <li v-for="item of articleList" :key="item._id">
        <div class="cover" v-if="item.cover">
          <img :src="item.cover" loading="lazy" />
        </div>
        <div class="text">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="updated">
            <span>
              {{ new Date(parseInt(item.updatedAt)).getFullYear() }}-{{
                new Date(parseInt(item.updatedAt)).getMonth() + 1
              }}-{{ new Date(parseInt(item.updatedAt)).getDate() }}
            </span>
            <span class="author">
              {{ item.author.username }}
            </span>
          </div>
          <div class="desc">
            {{
              item.description
            }}
          </div>
          <div class="read" :data-id="item._id">开始阅读</div>
        </div>
      </li>
    </ul>
    <GetMoreButton
      v-if="anyArticleElse"
      @getMore="getMore"
      :loading="loading"
    />
    <div v-else class="no-more">没有更多了</div>
  </div>
</template>

<script>
import GetMoreButton from "../common/GetMoreButton.vue";
import ArticleListLoading from "./ArticleListLoading.vue"
export default {
  components: {
    GetMoreButton,
    ArticleListLoading
  },
  data() {
    return {
      articleList: [],
      offset: 3,
      articleCount: 0,
      loading: false,
    };
  },
  computed: {
    anyArticleElse() {
      return !(this.articleCount === this.articleList.length);
    },
  },
  methods: {
    async getArticle(limit, offset, first) {
      let { data } = await this.$api.getArticle({
        limit,
        offset,
        first,
      });
      this.articleList.push(...data.articles);
      this.articleCount = data.articleCount;
    },
    async getMore() {
      this.loading = true;
      await this.getArticle(2, this.offset);
      this.offset += 2;
      this.loading = false;
    },
    read(e) {
      if (e.target.dataset.id)
        this.$router.push({
          name: "post",
          params: { id: e.target.dataset.id },
        });
    },
  },
  beforeMount() {
    this.getArticle(3, 0, true);
  },
};
</script>

<style>
.article-list-wrapper {
  width: 40vw;
}

.article-list-wrapper .recent {
  font-size: 25px;
  margin: 0 0 1vw 5px;
  font-family: "黑体";
}

.article-list-wrapper .no-more {
  color: rgb(101, 101, 101);
  margin: 0 auto;
  height: 16px;
  width: 80px;
}

.article-list-wrapper ul li {
  width: 100%;
  margin-bottom: 3vh;
  border-radius: 10px;
  transition: box-shadow 0.1s linear;
  overflow: hidden;
}

.article-list-wrapper ul li:hover {
  box-shadow: 5px 5px 5px rgb(79, 79, 79);
}

.article-list-wrapper ul li .cover {
  max-height: 21vw;
  background-color: rgba(153, 153, 153, 0.586);
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}

.article-list-wrapper ul li .cover img {
  width: 100.1%;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
}

.article-list-wrapper ul li .cover img:hover {
  transform: scale(1.05, 1.05);
}

.article-list-wrapper ul li .text {
  background-color: #fff;
  height: 16vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 1vh;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}
.article-list-wrapper ul li .text .title {
  font-size: 25px;
  font-family: "宋体";
  font-weight: 500;
  height: 5vh;
  line-height: 5vh;
  padding-left: 10px;
  font-weight: 800;
}

.article-list-wrapper ul li .text .updated {
  font-size: 0.8vw;
  font-family: "宋体";
  color: rgb(80, 80, 80, 0.9);
  padding-left: 10px;
  height: 2.5vh;
}

.article-list-wrapper ul li .text .author {
  color: rgba(0, 0, 0, 0.864);
  font-weight: bold;
}

.article-list-wrapper ul li .text .desc {
  font-family: "宋体";
  padding-left: 10px;
  flex-grow: 1;
  line-height: 1.3;
}

.article-list-wrapper ul li .text .read {
  width: 6em;
  color: red;
  /* padding-left: 10px; */
  height: 3vh;
  letter-spacing: 2px;
  text-align: center;
  line-height: 3vh;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.article-list-wrapper ul li .text .read:hover {
  background-color: rgb(255, 241, 243);
}
</style>