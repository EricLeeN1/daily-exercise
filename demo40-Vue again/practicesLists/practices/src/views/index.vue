<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    imgSite() {
      return this.$store.state.imgSite;
    },
    handShake() {
      return this.$store.state.hand.handShake;
    }
  },
  beforeCreate() {
    // this.$api.get("topics", null, res => {
    //   if (res.success) {
    //     this.topics = res.data;
    //   }
    // });
    this.$store.dispatch("handShakes");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  height: 576px;
  @include container;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.15);
}
</style>
