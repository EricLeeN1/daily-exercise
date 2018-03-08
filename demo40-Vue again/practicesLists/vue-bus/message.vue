<template>
  <div>
      {{ message }}
      <button @click="handleClick">Change world</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello World"
    };
  },
  methods: {
    hanldeClick() {
      this.message = "Hello Vue.";
    }
  }
};
</script>
