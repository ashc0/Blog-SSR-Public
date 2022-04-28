<template>
  <div class="server-error">
    {{ $route.query.status }}：{{ $route.query.msg }}
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.server-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
}
</style>