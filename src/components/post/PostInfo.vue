<template>
  <div class="loaded">
    <div class="cover">
      <img :src="cover" />
    </div>
    <div class="content">
      <div class="title">
        <span>{{ title }} </span>
      </div>
      <div class="info">
        <div class="avatar">
          <img :src="author.avatar" />
        </div>
        <div class="about">
          <div class="username">
            <span>{{ author.username }}</span>
          </div>
          <div class="update">
            <span>
              {{ new Date(parseInt(updatedAt)).getFullYear() }}-{{
                new Date(parseInt(updatedAt)).getMonth() + 1
              }}-{{ new Date(parseInt(updatedAt)).getDate() }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="body">
      <Editor
        style="width: 100%"
        v-model="body"
        @onCreated="onCreated"
      />
    </div>
  </div>
</template>

<script>
// import "@wangeditor/editor/dist/css/style.css";
import { Editor } from "@wangeditor/editor-for-vue";
export default {
  components: {
    Editor,
  },
  props: ["author", "title", "cover", "updatedAt", "body"],
  data() {
    return {
      editor: null
    }
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
      this.editor.disable()
      console.log(this.editor.getConfig())
    },
  },
};
</script>

<style scoped>
.loaded {
  width: 40vw;
  background-color: #fff;
  top: 7vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20vh;
}

.loaded > .cover {
  width: 100%;
}

.loaded > .cover > .cover-loading {
  height: 22.5vw;
  background-color: rgb(214, 211, 211);
}

.loaded > .cover img {
  width: 100%;
}

.loaded > .content {
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
}

.loaded > .content > .title {
  font-size: 30px;
  font-family: "黑体";
  font-weight: 500;
  height: 5vh;
  line-height: 5vh;
}

.loaded > .content > .info {
  height: 7vh;
  display: flex;
  align-items: center;
}

.loaded > .content > .info > .avatar {
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  overflow: hidden;
  background-color: #999;
  border: 1px solid #999;
}

.loaded > .content > .info > .avatar img {
  width: 100%;
}

.loaded > .content > .info > .about {
  flex-grow: 1;
  margin-left: 10px;
}

.loaded > .content > .info > .about > .username {
  position: relative;
  bottom: 10px;
  color: rgba(0, 0, 0, 0.864);
  font-family: "宋体";
  font-weight: bold;
  font-size: 18px;
}

.loaded > .content > .info > .about > .update {
  position: relative;
  top: 5px;
  font-size: 14px;
  font-family: "宋体";
}

.loaded > .body {
  flex-grow: 1;
  padding: 10px 18px;
  /* padding-bottom: 10vh; */
}
</style>

<style src="@wangeditor/editor/dist/css/style.css"></style>