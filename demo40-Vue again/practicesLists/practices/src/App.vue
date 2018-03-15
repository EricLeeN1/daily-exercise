<template>
  <div id="app" v-cloak>
    <router-view name="AppHeader"></router-view>
    <router-view></router-view>
    <footer>
      <div class="tab-list">
        <router-link :title="item.title" :to="item.route" class="tab-item" v-for="(item,index) in list" :key="index" active-class="active">
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      list: [
        {
          active: true,
          title: "活动二维码",
          route: "/tab1"
        },
        {
          active: false,
          title: "签到",
          route: "/tab2"
        },
        {
          active: false,
          title: "消息墙",
          route: "/tab3"
        },
        {
          active: false,
          title: "红包雨",
          route: "/tab4"
        },
        {
          active: false,
          title: "摇一摇",
          route: "/tab5"
        },
        {
          active: false,
          title: "砸金蛋",
          route: "/tab6"
        },
        {
          active: false,
          title: "老虎机",
          route: "/tab7"
        },
        {
          active: false,
          title: "活动相册",
          route: "/tab8"
        }
      ]
    };
  },
  computed: {
    handShake() {
      return this.$store.state.hand.handShake;
    }
  },
  beforeCreate() {
    this.$store.dispatch("handShakes");
  }
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  background: url("./assets/images/BackgroundImage.jpg") no-repeat center center;
  background-size: 100% 100%;
  background-attachment: fixed;
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
            // @include spirits;
            background: url("./assets/images/footer-spirit.png") no-repeat;
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
            // @include spirits;
            background: url("./assets/images/footer-spirit.png") no-repeat;
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
}
</style>
