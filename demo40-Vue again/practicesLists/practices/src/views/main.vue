<template>
<main>
  <router-view></router-view>
</main>
</template>
<script>
import Tab1 from "../components/tab1.vue";
import Tab2 from "../components/tab2.vue";

export default {
  name: "Main",
  mounted() {
    // console.log($route);
  }
};
</script>
<style lang="scss" scoped>
main {
  height: 576px;
  @include container;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.15);
}
</style>

