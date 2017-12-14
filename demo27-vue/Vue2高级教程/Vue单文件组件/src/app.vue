<template>
  <div id="app">
    <p>{{greeting}} World!</p>
  <div id="demo">
    <button v-on:click="show=!show">Toggle</button>
  </div>
  <transition name="fade">
  <p v-if="show">Hello</p>
  </transition>
  <h3>{{transition}}</h3>
  <ol>
    <li v-for="(value,key) in transitionItems" :key="key">{{key+':'+value}}</li>
  </ol>
  <p><router-link to="/demo2">去看看另一个demo</router-link></p>
  </div>
</template>

<script>
import demo2 from "./demo2.vue";
export default {
  name: "app",
  data: function() {
    return {
      greeting: "Hello",
      show: true,
      transition: "会有 4 个(CSS)类名在 enter/leave 的过渡中切换 ",
      tips: "transition里面的name属性用来重置默认的v-前缀,例子中用的是fade，因此css中修饰的时候就用fade-enter",
      transitionItems: {
        "v-enter": "定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。",
        "v-enter-active":
          "定义进入过渡的结束状态。在元素被插入时生效，在,transition/animation 完成之后移除。",
        "v-leave": "定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。",
        "v-leave-active":
          "定义离开过渡的结束状态。在离开过渡被触发时生效，在transition/animation 完成之后移除。"
      }
    };
  }
};
</script>
<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
.fade-enter-active,
.fade-live-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
