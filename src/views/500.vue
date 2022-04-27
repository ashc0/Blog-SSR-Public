<template>
  <div class="server-error">
    500 Server Error
    <div class="message">{{$route.query.msg}}</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.server-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 30px;
  font-weight: bold;
}
.server-error .message {
  margin: 0 auto;
}
</style>