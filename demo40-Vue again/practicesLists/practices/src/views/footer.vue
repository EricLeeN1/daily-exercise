<template>
<footer>
  <router-link :to="key"></router-link>
</footer>
</template>
<script>
export default {
  data () {
    return {
      list:[
        {
          imgUrl:'',
          imgUrlActive:'',
          alt:'',
          hrefUrl:''
        },
        {

        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>

</style>

