<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <p>图片地址{{imgSite}}</p>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="(item,key) in handShake" :key="key">
        {{key+'-'+item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    imgSite() {
      return this.$store.state.imgSite;
    },
    handShake() {
      return this.$store.state.hand.handShake;
    }
  },
  beforeCreate() {
    // this.$api.get("topics", null, res => {
    //   if (res.success) {
    //     this.topics = res.data;
    //   }
    // });
    this.$store.dispatch("handShakes");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.topics-list {
  width: 1600px;
  overflow: hidden;
  margin: 0 auto;
}
.topics-list > .markdown-text {
  width: 100%;
}
.markdown-text div p img {
  width: 100%;
}
</style>
