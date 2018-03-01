<template>
  <div>
      <h1>首页</h1>
      <p>{{sumCounts}}</p>
      <p>{{count}}</p>
      <p>{{list}}</p>
      <p>{{listCount}}</p>
      <button @click="handleIncrement">+1</button>
      <button @click="handleDecrease">-1</button>
      <button @click="handleActionIncrement">action +1</button>
      <button @click="handleAsyncIncrement">async +1</button>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.a.count;
    },
    sumCounts() {
      return this.$store.getters.sumCount;
    },
    list() {
      return this.$store.getters.filteredList;
    },
    listCount() {
      return this.$store.getters.listCount;
    }
  },
  methods: {
    handleIncrement() {
      this.$store.commit("increment", 5);
    },
    handleActionIncrement() {
      this.$store.dispatch("increment");
    },
    handleDecrease() {
      this.$store.commit({
        type: "decrease",
        count: 5
      });
    },
    handleAsyncIncrement() {
      this.$store.dispatch("asyncIncrement").then(() => {
        console.log(this.$store.state.a.count); //1
      });
    }
  }
};
</script>
