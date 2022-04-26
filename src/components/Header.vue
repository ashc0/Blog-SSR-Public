<template>
  <transition name="header">
    <div id="header-bar" v-if="$route.path !== '/'" v-show="show">
      <div class="header-bar-content">
        <div
          v-for="item in routes"
          :key="item.name"
          :class="{ active: $route.path === item.path }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import throttle from "../utils/throttle";
export default {
  data() {
    return {
      routes: [
        {
          name: "首页",
          path: "/home",
        },
        {
          name: "碎片",
          path: "/fragment",
        },
        {
          name: "留言",
          path: "/message",
        },
        {
          name: "关于",
          path: "/about",
        },
      ],
      show: true,
      thr: null,
      scrollY: 0,
    };
  },
  methods: {},
  created() {},
  mounted() {
    this.thr = throttle(() => {
      let scroll = window.scrollY;
      if (scroll > this.scrollY) this.show = false;
      else this.show = true;
      this.scrollY = scroll;
    }, 400);
    window.addEventListener("scroll", (e) => {
      this.thr(e);
    });
  },
};
</script>

<style scoped>
.header-enter {
  transform: translateY(-100%);
}
.header-enter-active {
  transition: transform 0.3s ease-in;
}
.header-leave-to {
  transform: translateY(-100%);
}

.header-leave-active {
  transition: transform 0.3s ease-in;
}
#header-bar {
  height: 5.5vh;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  /* transition: background-color 0.3s ease; */
  background-attachment: fixed;
}
#header-bar .header-bar-content {
  display: flex;
  margin: 0 auto;
  width: 30%;
  height: 100%;
  justify-content: space-between;
}
#header-bar .header-bar-content div {
  line-height: 5.5vh;
  text-align: center;
  width: 20%;
  font-family: "宋体";
  font-weight: bold;
  cursor: pointer;
  transition: background-color;
}

#header-bar .header-bar-content div:hover {
  background-color: #eee;
}

#header-bar .header-bar-content div.active {
  background-color: rgb(228, 228, 228);
}
</style>