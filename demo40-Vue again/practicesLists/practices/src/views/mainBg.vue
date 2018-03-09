<template>
<div id="bg-img">
</div>
</template>
<script>
export default {};
</script>
<style scoped>
#bg-img {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/BackgroundImage.jpg") no-repeat center
    center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>

