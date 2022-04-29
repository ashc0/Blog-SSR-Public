<template>
  <div class="fragment-list-wrapper">
    <div class="recent">最近碎片</div>
    <!-- <FragmentListLoading v-if="!fragmentList.length" /> -->
    <ul @click="read">
      <li v-for="item of fragmentList" :key="item._id">
        <div class="text">
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
            <Editor
              style="width: 100%"
              v-model="item.body"
              @onCreated="onCreated"
            />
          </div>
        </div>
      </li>
    </ul>
    <GetMoreButton
      v-if="anyFragmentElse"
      @getMore="getMore"
      :loading="loading"
    />
    <div v-else class="no-more">没有更多了</div>
  </div>
</template>

<script>
import GetMoreButton from "../common/GetMoreButton.vue";
import { Editor } from "@wangeditor/editor-for-vue";
// import FragmentListLoading from "./FragmentListLoading.vue";
export default {
  components: {
    GetMoreButton,
    // FragmentListLoading,
    Editor,
  },
  data() {
    return {
      fragmentList: [
        {
          body: "<h1>111</h1>",
          updatedAt: "1651116639902",
          author: {
            username: "Haruko",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbALKepLgyEfJIYhnwrb0hNBEcXdTmZrMobw&usqp=CAU",
          },
        },{
          body: "<h1>222</h1>",
          updatedAt: "1651116639902",
          author: {
            username: "Haruko",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbALKepLgyEfJIYhnwrb0hNBEcXdTmZrMobw&usqp=CAU",
          },
        },{
          body: "<h1>333</h1>",
          updatedAt: "1651116639902",
          author: {
            username: "Haruko",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbALKepLgyEfJIYhnwrb0hNBEcXdTmZrMobw&usqp=CAU",
          },
        },{
          body: "<h1>444</h1>",
          updatedAt: "1651116639902",
          author: {
            username: "Haruko",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbALKepLgyEfJIYhnwrb0hNBEcXdTmZrMobw&usqp=CAU",
          },
        },{
          body: "<h1>555</h1>",
          updatedAt: "1651116639902",
          author: {
            username: "Haruko",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbALKepLgyEfJIYhnwrb0hNBEcXdTmZrMobw&usqp=CAU",
          },
        }
      ],
      offset: 3,
      fragmentCount: 0,
      loading: false,
    };
  },
  computed: {
    anyFragmentElse() {
      return !(this.fragmentCount === this.fragmentList.length);
    },
  },
  methods: {
    async getFragment(limit, offset, first) {
      let { data } = await this.$api.getFragment({
        limit,
        offset,
        first,
      });
      this.fragmentList.push(...data.fragments);
      this.fragmentCount = data.fragmentCount;
    },
    async getMore() {
      this.loading = true;
      await this.getFragment(2, this.offset);
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
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
      this.editor.disable();
      // console.log(this.editor.getConfig())
    },
  },
  beforeMount() {
    // this.getFragment(3, 0, true);
  },
};
</script>
<style>
.fragment-list-wrapper {
  width: 40vw;
}

.fragment-list-wrapper .recent {
  font-size: 25px;
  margin: 0 0 1vw 5px;
  font-family: "黑体";
}

.fragment-list-wrapper .no-more {
  color: rgb(101, 101, 101);
  margin: 0 auto;
  height: 16px;
  width: 80px;
}

.fragment-list-wrapper ul li {
  width: 100%;
  margin-bottom: 3vh;
  border-radius: 10px;
  transition: box-shadow 0.1s linear;
  overflow: hidden;
}

.fragment-list-wrapper ul li:hover {
  box-shadow: 5px 5px 5px rgb(79, 79, 79);
}

.fragment-list-wrapper ul li .text {
  background-color: #fff;
  height: 16vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 1vh;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}
/* 
.fragment-list-wrapper ul li .text .updated {
  font-size: 0.8vw;
  font-family: "宋体";
  color: rgb(80, 80, 80, 0.9);
  padding-left: 10px;
  height: 2.5vh;
}

.fragment-list-wrapper ul li .text .author {
  color: rgba(0, 0, 0, 0.864);
  font-weight: bold;
}

.fragment-list-wrapper ul li .text .desc {
  font-family: "宋体";
  padding-left: 10px;
  flex-grow: 1;
  line-height: 1.3;
} */
</style>

<style src="@wangeditor/editor/dist/css/style.css"></style>
