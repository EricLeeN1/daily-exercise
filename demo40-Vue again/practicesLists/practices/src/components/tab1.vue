<template>
<section class="canvas">
  <div id="qr-code"></div>
</section>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  name: "Tab1",
  methods: {
    qrcode() {
      let canvas = document.getElementById("qr-code");
      new QRCode(canvas, {
        text: "http://www.gexiazi.com",
        width: 360,
        height: 360,
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
.canvas {
  height: 576px;
  @include container;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.15);
  @include flex-center(0);
  justify-content: center;
  #qr-code {
    width: 360px;
    height: 360px;
  }
}
</style>

