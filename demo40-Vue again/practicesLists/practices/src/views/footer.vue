<template>
<footer>
  <div class="tab-list">
    <router-link :to="item.hrefUrl" class="tab-item" v-for="(item,index) in list" :key="index" active-class="active"></router-link>
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
          alt: "扫码加入活动",
          hrefUrl: "/tab1"
        },
        {
          active: false,
          alt: "扫码加入活动",
          hrefUrl: "/tab2"
        },
        {
          active: false,
          alt: "扫码加入活动",
          hrefUrl: "/tab3"
        },
        {
          active: false,
          alt: "扫码加入活动",
          hrefUrl: "/tab4"
        },
        {
          active: false,
          alt: "扫码加入活动",
          hrefUrl: "/tab5"
        },
        {
          active: false,
          alt: "扫码加入活动",
          hrefUrl: "/tab6"
        },
        {
          active: false,
          alt: "扫码加入活动",
          hrefUrl: "/tab7"
        },
        {
          active: false,
          alt: "扫码加入活动",
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
    a.tab-item {
      @include spirits;
      width: 60px;
      height: 45px;
      background-position: 0 0;
      &:hover,
      &.active {
        background-position: -60px 0;
      }
    }
  }
}
</style>

