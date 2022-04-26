<template>
  <div class="article-list-wrapper">
    <div class="recent">最近文章</div>
    <ul v-if="!articleList.length">
      <li v-for="(item, idx) in 2" :key="idx">
        <div class="cover" style="height: 21vw"></div>
        <div class="text">
          <div class="title">
            <span
              style="
                display: inline-block;
                background-color: #999;
                height: 25px;
                width: 30%;
              "
            ></span>
          </div>
          <div class="updated">
            <span
              style="
                display: inline-block;
                background-color: #999;
                height: 0.8vw;
                width: 20%;
              "
            ></span>
          </div>
          <div class="desc">
            <span
              style="
                display: inline-block;
                background-color: #999;
                height: 16px;
                width: 95%;
              "
            ></span>
            <span
              style="
                display: inline-block;
                background-color: #999;
                height: 16px;
                width: 50%;
              "
            ></span>
          </div>
        </div>
      </li>
    </ul>
    <ul v-else>
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
                new Date(parseInt(item.updatedAt)).getMonth()
              }}-{{ new Date(parseInt(item.updatedAt)).getDate() }}
            </span>
            <span class="author">
              {{ item.author.username }}
            </span>
          </div>
          <div class="desc">
            {{
              item.description
            }}撒风景哈搜钛金色噢if为爱谁哦啊接哦工商局饿哦is额合同为阿瑟回事
          </div>
          <div class="read">开始阅读</div>
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
import GetMoreButton from "./GetMoreButton.vue";
export default {
  components: {
    GetMoreButton,
  },
  data() {
    return {
      defaultCover:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F571f292367444.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653399138&t=083475a95a8a2e253162981c4fc7b130",
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
  },
  created() {
    this.getArticle(3, 0, true);
  },
};
</script>

<style scoped>
.article-list-wrapper {
  width: 40vw;
  /* text-align: center; */
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
  background-color: lightblue;
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
  /* width: 120%; */
  transform: scale(1.05, 1.05);
}

.article-list-wrapper ul li .text {
  background-color: #fff;
  height: 17vh;
  /* padding: 15px 10px; */
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  padding-bottom: 1vh;
  box-sizing: border-box;
  padding-left: 10px;
}
.article-list-wrapper ul li .text .title {
  font-size: 25px;
  font-family: "黑体";
  font-weight: 500;
  height: 4vh;
  line-height: 4vh;
  padding-left: 10px;
}

.article-list-wrapper ul li .text .updated {
  font-size: 0.8vw;
  font-family: "宋体";
  color: rgb(80, 80, 80, 0.9);
  /* letter-spacing: 0; */
  padding-left: 10px;
  height: 3vh;
  /* margin-top: 0.8vw; */
}
.article-list-wrapper ul li .text .author {
  color: rgba(0, 0, 0, 0.864);
  font-weight: bold;
}

.article-list-wrapper ul li .text .desc {
  font-family: "宋体";
  padding-left: 10px;
  flex-grow: 1;
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