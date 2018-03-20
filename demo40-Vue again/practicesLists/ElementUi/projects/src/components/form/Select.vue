<template>
<section>
  <h1>1.基础用法</h1>
  <p>v-model的值为当前被选中的el-option的 value 属性值</p>
  <div>
     <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
section {
}
</style>

