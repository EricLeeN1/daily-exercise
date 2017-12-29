<template>
  <div class="post">
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
      post: null,
      error: null
    };
  },
  beforeRouteEnter: (to, from, next) => {
    //   ${//does NOT have access to `this` component instance} 此时还访问不到this
    postAjax(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post));
    });
  },
  //路由器改变前，组件就已经渲染完了
  //逻辑稍稍不同
  beforeRouteUpdate(to, from, next) {
    this.post = null;
    getAjax(to.params.id, (err, post) => {
      this.setData(err, post);
      next();
    });
  },
  methods: {
    setData(err, post) {
      if (err) {
        this.error = err.toString();
      } else {
        this.post = post;
      }
    }
  }
};
</script>

