<template>
<ul class="tab2">
  <li v-for="item in userLists" :class="timeEnd?'img-active':''" :key="item.id" v-if="userLists.length>0">
    <img :src="item.logo" :alt="item.name" >
    <p>{{item.name}}</p>
  </li>
  <li v-else>
    现在还什么都没有哦
  </li>
</ul>
</template>
<script>
export default {
  data() {
    return {
      timeEnd: true
    };
  },
  computed: {
    userLists() {
      return this.$store.state.user.userDatas.list;
    }
  },
  beforeCreate() {
    this.$store.dispatch("userInfos");
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 30px;
  margin: 0;
  overflow: hidden;
  @include clearfix;
  li {
    @include flex-center(1);
    float: left;
    margin: 16px 0 8px;
    width: 120px;
    img {
      width: 90px;
      height: 90px;
      box-sizing: border-box;
      border: 6px solid #e1e1e1;
      @include rounded-corners(50%);
      // animation: sbc 3s 1;
    }
    p {
      font-size: 16px;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #fff;
      padding: 0 3px;
    }
    &.img-active {
      animation: sbc 3s 1;
    }
  }
}
@keyframes sbc {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>

