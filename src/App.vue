<template>
  <div id="app" style="width: 100%; height: 100vh;">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
