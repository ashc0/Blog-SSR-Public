<template>
  <div>
    <button @click="login">Login</button>
    <button @click="print">print</button>
    <div id="mask" v-if="!createdHtml">created</div>
    <div id="created" v-html="createdHtml" v-if="createdHtml"></div>
    <div id="mask" v-if="!mountedHtml">mounted</div>
    <div id="mounted" v-html="mountedHtml" v-if="mountedHtml"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createdHtml: "",
      mountedHtml: "",
    };
  },
  methods: {
    async login() {
      try {
        const token = await this.$api.login({
          username: "test",
          password: "123321",
        });
        console.log(token);
      } catch (err) {
        console.log(err.data.error.msg);
      }
    },
    print() {
      console.log(this.$route.query);
    },
  },
  async created() {
    let { data } = await this.$api.getArticleById("6254ac0fe90542b552ab2f7c");
    this.createdHtml = data.article.body;
  },
  async mounted() {
    let { data } = await this.$api.getArticleById("6254ac0fe90542b552ab2f7c");
    this.mountedHtml = data.article.body;
  },
};
</script>

<style>
#mask {
  width: 100px;
  height: 100px;
  background-color: black;
  color: white;
}
</style>