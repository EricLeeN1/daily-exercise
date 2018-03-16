<template>
<section class="panel-3">
  <ul class="msg-list" v-if="msg">
    <li v-for="item in msg" :key="item.id">
      <img :src="item.logo" :alt="item.name">
      <div class="msg-content">
        <h3>{{item.name}}</h3>
        <p :style="'font-size:'+item.fontSize">{{item.msg}}</p>
      </div>
    </li>
  </ul>
  <ul class="msg-list" v-else>
    <li>
      <img :src="none" alt="">
      <p>还没有信息哦，请稍后</p>
    </li>
  </ul>
  <div class="msg-attend">
    <div id="qr-code">

    </div>
  </div>
</section>
</template>
<script>
// import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      none: this.$store.state.none
    };
  },
  computed: {
    msg() {
      let list = this.$store.state.msg.msgDatas.list;
      console.log(list);
      if (list) {
        list.forEach(ele => {
          if (!ele.msg) {
            ele.msg = "女人如火";
          }
          if (ele.msg.length > 0 && ele.msg.length <= 10) {
            ele.fontSize = "40px";
          } else if (ele.msg.length > 10 && ele.msg.length <= 20) {
            ele.fontSize = "30px";
          } else if (ele.msg.length > 20 && ele.msg.length <= 30) {
            ele.fontSize = "25px";
          } else {
            ele.fontSize = "20px";
          }
        });
      }
      return list;
    }
  },
  // methods: {
  //   // qrcode() {
  //   //   let canvas = document.getElementById("qr-code");
  //   //   new QRCode(canvas, {
  //   //     text: "http://www.gexiazi.com",
  //   //     width: 200,
  //   //     height: 200,
  //   //     colorDark: "#000000",
  //   //     colorLight: "#ffffff",
  //   //     correctLevel: QRCode.CorrectLevel.H
  //   //   });
  //   // }
  // },
  beforeCreate() {
    this.$store.dispatch("userInfos");
  }
  // mounted() {
  //   // this.$nextTick(function() {
  //   //   this.qrcode();
  //   // });
  // }
};
</script>

<style lang="scss" scoped>
.panel-3 {
  .msg-list {
    height: 100%;
    width: 700px;
    overflow-y: scroll;
    padding: 2px 20px 0 20px;
    li {
      @include flex-center(0);
      background: #fff;
      width: 650px;
      height: 150px;
      margin: 15px 0;
      @include rounded-corners(15px);
      img {
        width: 110px;
        height: 110px;
        @include rounded-corners(50%);
        box-sizing: border-box;
        border: 6px solid #e1e1e1;
        margin: 20px;
      }
      .msg-content {
        float: 0 0 500px;
        box-sizing: border-box;
        padding: 20px 20px 20px 0;
        @include flex-center(1);
        width: 500px;
        height: 100%;
        align-items: flex-start;
        justify-content: center;
        h3 {
          margin-bottom: 10px;
        }
        p {
        }
      }
    }
  }
  .msg-attend {
    @include flex-center(1);
  }
}
</style>

