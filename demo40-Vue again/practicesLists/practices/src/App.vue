<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./views/header.vue";
import AppMain from "./views/main.vue";
import AppFooter from "./views/footer.vue";
export default {
  name: "App",
  components: {
    AppHeader: AppHeader,
    AppFooter: AppFooter,
    AppMain: AppMain
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
  width: 100vw;
  height: 100vh;
  background: url("./assets/images/BackgroundImage.jpg") no-repeat center center;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
