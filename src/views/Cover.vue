<template>
  <transition name="cover">
    <Background>
        <span class="title" :class="{ move: titleMove, show: titleShow }">
          {{ title }}
        </span>

        <div class="entry" :class="{ show: entryShow }" @click="enter">
          <div class="inside"></div>
        </div>
    </Background>
  </transition>
</template>

<script>
import Background from "../components/common/Background.vue";
export default {
  components: {
    Background,
  },
  data() {
    return {
      titleShow: false,
      titleMove: false,
      timer0: null,
      timer1: null,
      timer2: null,
      entryShow: false,
    };
  },
  computed: {
    title() {
      return this.$store.getters.context.title
    },
  },
  methods: {
    hideTitle() {
      this.titleShow = false;
    },
    moveTitle() {
      this.titleMove = true;
      this.titleShow = true;
    },
    showTitle() {
      this.titleShow = true;
    },
    showEntry() {
      this.entryShow = true;
    },
    enter() {
      this.$router.push("/home");
    },
  },
  beforeMount() {
    this.timer0 = setTimeout(() => {
      this.showTitle();
      this.timer1 = setTimeout(() => {
        this.hideTitle();
        this.timer2 = setTimeout(() => {
          this.moveTitle();
          this.showEntry();
        }, 1000);
      }, 1000);
    }, 1000);
  },
  beforeDestroy() {
    clearTimeout(this.timer0);
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  },
};
</script>

<style scoped>
.cover-leave-to {
  opacity: 0;
}
.cover-leave-active {
  transition: opacity 1s linear;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3D(-50%, -60%, 0);
  font-family: "仿宋";
  color: white;
  font-size: 3vw;
  line-height: 3vw;
  height: 3vw;
  transition: opacity 0.5s linear;
  opacity: 0;
}

.title.move {
  top: 20%;
}

.title.show {
  opacity: 1;
}

.entry {
  width: 3vw;
  height: 3vw;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 0.5vw;
  cursor: pointer;
  transition: opacity 0.5s ease;

  opacity: 0;
}

.entry.show {
  opacity: 0.6;
}

.entry:hover {
  opacity: 1;
}

.entry .inside {
  width: 1vw;
  height: 1vw;
  position: absolute;
  border: 0.5vw solid black;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.entry:hover .inside {
  opacity: 1;
}
</style>


