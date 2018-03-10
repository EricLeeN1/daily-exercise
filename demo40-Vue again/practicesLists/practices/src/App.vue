<template>
  <div id="app">
<<<<<<< HEAD
    <AppHeader></AppHeader>
=======
    <bgImg></bgImg>
>>>>>>> 8b3d37d2ba0486518c9cc519dfe6f04f8eefc47d
    <img src="./assets/images/logo.png">
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
import AppHeader from "./views/header.vue";
export default {
  name: "App",
  components: {
    AppHeader: AppHeader
=======
import bgImg from "./views/mainBg.vue";
export default {
  name: "App",
  components: {
    bgImg: bgImg
>>>>>>> 8b3d37d2ba0486518c9cc519dfe6f04f8eefc47d
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
  /* margin-top: 60px; */
  width: 100vw;
  height: 100vh;
  background: url("./assets/images/BackgroundImage.jpg") no-repeat center center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
