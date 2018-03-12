<template>
<header>
  <img src="../assets/images/logo/logo.png">
  <h3>
    歌匣子大屏幕现场演示
  </h3>
  <canvas id="activityQr"></canvas>
</header>
</template>
<script>
export default {
  methods: {
    qrcode() {
      let canvas = document.getElementById("activityQr");
      QRCode.toCanvas(canvas,'123456',function (err) {
        if (err) {
          console.error(err);
        }
        console.log('success');
      })
    }
  },
  mounted () {
    this.qrcode();
  }
};
</script>
<style lang="scss" scoped>
header {
  @include container;
  position: relative;
  @include flex-center(0);
  height: 180px;
  h3 {
    font-size: 60px;
    color: #31506e;
    font-weight: 300;
    margin-right: auto;
    margin-left: 30px;
  }
  img {
    width: 120px;
  }
  #activityQr {
    width: 100px;
    height: 100px;
  }
}
</style>


