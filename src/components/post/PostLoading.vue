<template>
  <div class="post-loading">
    <div class="cover">
      <div class="cover-loading"></div>
    </div>
    <div class="content">
      <div class="title">
        <div class="title-loading"></div>
      </div>
      <div class="info">
        <div class="avatar">
          <div class="avatar-loading"></div>
        </div>
        <div class="update">
          <div class="username-loading"></div>
        </div>
        <div class="text">
          <div class="update-loading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.post-loading {
  width: 40vw;
  background-color: #fff;
  /* height: 500px; */
  top: 7vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.post-loading > .cover {
  width: 100%;
}

.post-loading > .cover > .cover-loading {
  height: 22.5vw;
  background-color: rgb(214, 211, 211);
}

.post-loading > .cover img {
  width: 100%;
}

.post-loading > .content {
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
}

.post-loading > .content > .title {
  height: 5vh;
  padding: 1vh 0;
  box-sizing: border-box;
}

.post-loading > .content > .title > .title-loading {
  height: 3vh;
  width: 150px;
  background-color: rgb(214, 211, 211);
}

.post-loading > .content > .info {
  height: 7vh;
  display: flex;
  align-items: center;
}

.post-loading > .content > .info > .avatar {
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  overflow: hidden;
  background-color: #999;
  border: 1px solid #999;
}

.post-loading > .content > .info > .avatar img {
  width: 100%;
}

.post-loading > .content > .info > .update {
  flex-grow: 1;
  margin-left: 10px;
}

.post-loading > .content > .info > .update > .text {
}
</style>