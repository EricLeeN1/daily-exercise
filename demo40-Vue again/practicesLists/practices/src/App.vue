<template>
  <div id="app">
    <bgImg></bgImg>
    <img src="./assets/images/logo.png">
    <router-view/>
  </div>
</template>

<script>
import bgImg from "./views/mainBg.vue";
export default {
  name: "App",
  components: {
    bgImg: bgImg
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
