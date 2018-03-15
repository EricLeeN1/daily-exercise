<template>
<ul class="tab2">
  <li v-for="item in userLists" :key="item.id" v-if="userLists.length>0">
    <img :src="item.logo" :alt="item.name">
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
    return {};
  },
  computed: {
    userLists() {
      return this.$store.state.userInfos.userDatas.list;
    }
  },
  beforeCreate() {
    this.$store.dispatch("userInfos");
  }
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 30px;
  margin: 0;
  overflow: hidden;
  @include clearfix;
  li{
    @include flex-center(1);
    float: left;
    margin: 0 23px;
    img{
      width: 60px;
      @include rounded-corners(50%);
    }
    p{
      color: #fff;
    }
  }
}
</style>

