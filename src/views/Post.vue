<template>
  <div class="post">post</div>
</template>

<script>
export default {
  props: ["id"],
  async beforeMount() {
    try {
      const data = await this.$api.getArticleById(this.id);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>