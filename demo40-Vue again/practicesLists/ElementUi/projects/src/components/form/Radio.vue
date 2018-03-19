<template>
<section>
  <h1>1. 基础用法</h1>
  <p>要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。</p>
  <div style="margin-top:30px;">
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

</style>

