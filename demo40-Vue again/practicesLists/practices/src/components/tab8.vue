<template>
  <section class="show">
    <ul v-if="albumLists">
      <li v-for="item in albumLists" :data-url="item.url" :key="item.id">
        <img :src="item.url" :alt="item.userName">
        <div class="img-caption">
          <h3>{{item.userName}}</h3>
          <p>{{item.title}}</p>
        </div>
      </li>
    </ul>
    <div>
      <img :src="none" alt="">
      <p>还暂时没有活动照片哦</p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      none: this.$store.state.none
    };
  },
  computed: {
    albumLists() {
      let list = this.$store.state.album.albumDatas.list;
      if (list) {
        list.forEach(ele => {});
      }
      return list;
    }
  },
  beforeCreate() {
    this.$store.dispatch("albumInfos");
  }
};
</script>
<style lang="scss" scoped>
.show {
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    li {
      position: relative;
      width: 100%;
      height: 100%;
      @include flex-center(0);
      justify-content: center;
      img {
        @include positions($left:0,$bottom:0,$top:0,$right:0,$index:0);
      }
      .img-caption {
        z-index: 1;
        @include flex-center(1);
        color: #fff;
        margin-top: 300px;
        h3 {
          margin-bottom: 20px;
        }
        p {
        }
      }
    }
  }
}
</style>
