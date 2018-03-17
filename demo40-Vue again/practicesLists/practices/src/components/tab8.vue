<template>
  <section class="show">
    <ul v-if="albumLists">
      <li v-for="(item,index) in albumLists" :data-url="item.url" :key="item.id" v-show="item.active">
        <img :src="item.url" :alt="item.userName">
        <div class="img-caption">
          <h3>{{item.userName}}</h3>
          <p>{{item.title}}</p>
        </div>
        <div class="img-narrow">
          <img :src="narrowLeft" :disabled="index == 0"  :alt="index" @click="prev(index)">
          <img :src="narrowRight" :disabled="index == albumLists.lengt " :alt="index" @click="next(index)">
        </div>
        <div class="album-dots-list" :style="'margin-left:-' +albumLists.length*30/2+ 'px;'" :data-active="item.active">
          <div :class="['album-dots-items',iIndex==index?'album-dots-items-active':'']" v-for="(iItem,iIndex) in albumLists.length" :key="iIndex">
            {{iIndex - 0 + 1}}
          </div>
        </div>
      </li>
    </ul>
    <div class="album-none" v-else>
      <img :src="none" alt="">
      <p>还暂时没有活动照片哦</p>
    </div>

  </section>
</template>
<script>
export default {
  data() {
    return {
      none: this.$store.state.none,
      narrowLeft: this.$store.state.narrowLeft,
      narrowRight: this.$store.state.narrowRight,
      albumLists: ""
    };
  },
  methods: {
    prev(index) {
      let list = this.albumLists;
      console.log(index);
      list[index].active = false;
      index = Math.max(0, index - 1);
      console.log(index);
      list[index].active = true;
    },
    next(index) {
      let list = this.albumLists;
      list[index].active = false;
      index = Math.min(index + 1, list.length);
      list[index].active = true;
    }
  },
  beforeCreate() {
    this.$store.dispatch("albumInfos");
  },
  mounted() {
    setTimeout(() => {
      this.albumLists = this.$store.state.album.albumDatas.list;
    }, 2000);
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
      }
      .img-narrow {
        @include positions($top:50%);
        margin-top: -48px;
        width: 100%;
        @include flex-center(0);
        height: 96px;
        img {
          width: 96px;
          &:last-child {
            margin-left: auto;
          }
        }
      }
      .album-dots-list {
        @include positions($left:50%,$bottom:30px);
        @include flex-center(0);
        .album-dots-items {
          color: #333;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          line-height: 20px;
          text-align: center;
          font-size: 14px;
          background-color: #fff;
          @include rounded-corners(50%);
          &.album-dots-items-active {
            background-color: #f55053;
            color: #fff;
          }
        }
      }
    }
  }
  .album-none {
    @include flex-center(1);
    img {
      margin-bottom: 10px;
    }
    p {
      color: #fff;
    }
  }
}
</style>
