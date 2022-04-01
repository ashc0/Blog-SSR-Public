<template>
  <div>
    <button @click="login">Login</button>
    <button @click="print">print</button>
  </div>
</template>

<script>
export default {
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
};
</script>

<style>
</style>