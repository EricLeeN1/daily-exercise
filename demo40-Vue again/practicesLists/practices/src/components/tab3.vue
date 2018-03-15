<template>
<section class="panel-3">
  <ul class="msg-list" v-if="msg.length>0" v-for="item in msg" :key="item.id">
    <li>
      <img :src="item.logo" :alt="item.name">
      <div class="msg-content">
        <h3>{{item.name}}</h3>
        <p>{{item.msg}}</p>
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

  </div>
</section>
</template>
<script>
export default {
  data() {
    return {
      none:this.$store.state.none
    };
  },
  computed: {
    msg() {
      return this.$store.state.msg.msgDatas.list;
    }
  },
  beforeCreate() {
    this.$store.dispatch("userInfos");
  }
};
</script>

<style lang="scss" scoped>

</style>

