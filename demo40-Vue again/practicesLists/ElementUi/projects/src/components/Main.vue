<template>
<main>
  <router-view></router-view>
</main>
</template>
<script>

export default {
  name:'Main',
  mounted () {
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
  overflow-y: scroll;
}
</style>

