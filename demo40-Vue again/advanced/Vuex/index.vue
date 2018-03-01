<template>
  <div>
      <h1>首页</h1>
      <p>{{count}}</p>
      <button @click="handleIncrement">+1</button>
      <button @click="handleDecrease">-1</button>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    handleIncrement() {
      this.$store.commit("increment", 5);
    },
    handleDecrease() {
      this.$store.commit("decrease", 5);
    }
  }
};
</script>
