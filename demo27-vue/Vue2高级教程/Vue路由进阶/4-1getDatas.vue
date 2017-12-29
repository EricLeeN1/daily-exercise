<template>
<div class="post">
    <div class="loading" v-if="loading">
        loading...
    </div>
    <div v-if="error" class="error">
        {{error}}
    </div>
    <div v-if="post" class="content">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  created() {
    //组件创建完成后获取数据,
    //此时data已经被observed了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      //用你获取数据的地址跟api换掉外部
      postAjax(this.$route.params.id, (err, post) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.post = post;
        }
      });
    }
  }
};
</script>
<style lang="less">
//css文件
</style>

