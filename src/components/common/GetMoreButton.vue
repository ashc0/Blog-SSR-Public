<template>
  <div id="show-more" @click="getMore">
    <span v-show="!loading">{{ this.msg }}</span>
    <img v-show="loading" src="../../image/loading.gif" height="60%">
  </div>
</template>

<script>
export default {
  props: ['loading'],
  data() {
    return {
      msg: "加载更多"
    };
  },
  methods: {
    getMore() {
      if(!this.loading) this.$emit('getMore')
    }
  }
};
</script>

<style scoped>
#show-more {
  width: 6vw;
  height: 2vw;
  border-radius: 1vw;
  background-color: #31b0ff;
  margin: 0 auto;
  color: #fff;
  font-size: 0.8vw;
  line-height: 2.3vw;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s linear;
}

#show-more:hover {
  background-color: #6dc7ff;
}
</style>