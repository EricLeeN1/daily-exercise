<template>
<section class="show">
  <div class="begin-btn">

  </div>
</section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.show {
  background: url("../../../static/images/background/tab5-page1-bg.jpg");
  width: 100%;
  height: 100%;
  position: relative;
  .begin-btn {
    @include positions($left:50%,$bottom:60px);
    background: url("../../../static/images/btn/tab5-page1-btn.png");
    width: 300px;
    margin-left: -150px;
    height: 75px;
  }
}
</style>

