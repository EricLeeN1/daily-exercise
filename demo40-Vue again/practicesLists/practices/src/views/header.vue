<template>
<header>
  <img src="../assets/images/logo/logo.png">
  <h3>
    歌匣子大屏幕现场演示
  </h3>
  <div id="headerQr"></div>
</header>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  methods: {
    qrcode() {
      let canvas = document.getElementById("headerQr");
      new QRCode(canvas, {
        text: this.$store.state.qrcode,
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.qrcode();
    });
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
  #headerQr {
    width: 100px;
    height: 100px;
  }
}
</style>


