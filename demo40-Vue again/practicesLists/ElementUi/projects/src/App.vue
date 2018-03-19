<template>
  <div id="app">
<router-view name="AppHeader"></router-view>
    <router-view></router-view>
    <footer>
      <ul class="footer-lists">
        <li v-for="(item,index) in lists" :key="index">
          <a :href="item.url">{{item.title}}</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      lists: [
        {
          url: "base-layout",
          title: "Layout布局"
        },
         {
          url: "base-container",
          title: "Container布局"
        },
        {
          url: "base-button",
          title: "Button 按钮"
        },
        {
          url: "base-radio",
          title: "Radio 单选框"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  footer {
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      li {
        border-radius: 20px;
        padding: 20px;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.6);
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
