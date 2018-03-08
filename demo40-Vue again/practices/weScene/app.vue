<template>
  <div>
      <h3 class="compare">
        {{key}}
      </h3>
      <TabQrcode></TabQrcode>
      <router-link class="list-a" :to="item" v-for="(item,index) in tabList" :key="index">{{item}}</router-link>
      <router-link to="./tab">tab</router-link>
      <h1>首页</h1>
      {{img}}
  </div>
</template>
<script>
import TabQrcode from "./components/tab-qrcode.vue";
export default {
  data() {
    return {
      tabList: ["tab1", "tab2", "tab3", "tab4", "tab5", "tab6", "tab7", "tab8"],
      key: this.$store.state.handShake
    };
  },
  computed: {
    img() {
      return this.$store.state.handShake;
    }
    // key() {
    //   return this.$store.state.handShake;
    // }
  },
  components: {
    TabQrcode: TabQrcode
  },
  mounted() {
    this.$store.dispatch("handShakes");
  }
};
</script>
<style lang="scss" scoped>
.list-a {
  display: block;
}
</style>


