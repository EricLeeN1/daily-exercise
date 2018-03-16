<template>
  <section class="show">
    <!-- <p id="hammer">
    </p> -->
    <div id="eggs-hotarea">
    </div>
    <div id="egg"></div>
    <div class="broken-eggs2">

    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.show {
  background: url("../../static/images/background/tab6-page1-bg.jpg");
  width: 100%;
  height: 100%;
  position: relative;
  cursor: url("../../static/images/others/hammer.png"), auto;
  // #hammer {
  //   @include positions($left:50%,$bottom:60px);
  //   background: url("../../static/images/others/egg.png") no-repeat;
  //   width: 66px;
  //   height: 66px;
  // }
  #eggs-hotarea {
    width: 180px;
    height: 180px;
    margin-left: -66px;
    background: url("../../static/images/others/egg.png") no-repeat;
    @include positions($left:50%,$bottom:70px,$index:3);
  }
  #egg {
    height: 576px;
    width: 500px;
    @include positions($left:257px,$bottom:8px);
  }
  .broken-eggs2 {
    background: url("../../static/images/others/egg.png") no-repeat;
    animation: eggShake 3s 1;
    @keyframes eggShake {
      0% {
        background-position: -500px 0;
        opacity: 1;
      }
      25% {
        background-position: -1000px 0;
        opacity: 0;
      }
      50% {
        background-position: -1500px 0;
        opacity: 1;
      }
      75% {
        background-position: -2000px 0;
        opacity: 0;
      }
      100% {
        background-position: -3000px 0;
        opacity: 1;
      }
    }
  }
}
</style>

