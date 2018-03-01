<template>
  <div>
      <h1>首页</h1>
      <p>{{count}}</p>
  </div>
</template>
<script>export default {
    computed: {
        count(){
            return this.$store.state.count
        }
    }
}</script>
