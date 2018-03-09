<template>
<header>
  <h3>
    <p>1111</p>
    <button>1200</button>
  </h3>
  <canvas id="activityQr"></canvas>
</header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
header {
  // @include flex-center(0);
  background-color: #fff;
  h3{
    @include flex-center(0);
  }
}
#activityQr {
  width: 200px;
  height: 200px;
  background-color: #f55053;
}
</style>


