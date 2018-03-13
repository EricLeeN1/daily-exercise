<template>
<footer>
  <div class="tab-list">
    <router-link :title="item.title" :to="item.hrefUrl" class="tab-item" v-for="(item,index) in list" :key="index" active-class="active"></router-link>
  </div>
</footer>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          active: true,
          title: "活动二维码",
          hrefUrl: "/tab1"
        },
        {
          active: false,
          title: "签到",
          hrefUrl: "/tab2"
        },
        {
          active: false,
          title: "消息墙",
          hrefUrl: "/tab3"
        },
        {
          active: false,
          title: "红包雨",
          hrefUrl: "/tab4"
        },
        {
          active: false,
          title: "摇一摇",
          hrefUrl: "/tab5"
        },
        {
          active: false,
          title: "砸金蛋",
          hrefUrl: "/tab6"
        },
        {
          active: false,
          title: "老虎机",
          hrefUrl: "/tab7"
        },
        {
          active: false,
          title: "活动相册",
          hrefUrl: "/tab8"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 22px 0;
  z-index: 100;
  .tab-list {
    @include container;
    @include flex-center(0);
    @for $i from 1 through $column-number {
      @if $i % 2 == 0 {
        $j: ($i / 2) - 1;
        $x: $i * 120;
        $y: $j * 45;
        a.tab-item:nth-child(#{$i}) {
          @include spirits;
          width: 60px;
          height: 45px;
          background-position: -120px -#{$y}px;
          &:hover,
          &.active {
            background-position: -180px -#{$y}px;
          }
        }
      } @else {
        $j: ($i - 1) / 2;
        $x: $i * 60;
        $y: $j * 45;
        a.tab-item:nth-child(#{$i}) {
          @include spirits;
          width: 60px;
          height: 45px;
          background-position: 0 -#{$y}px;
          &:hover,
          &.active {
            background-position: -60px -#{$y}px;
          }
        }
      }
    }
  }
}
</style>

