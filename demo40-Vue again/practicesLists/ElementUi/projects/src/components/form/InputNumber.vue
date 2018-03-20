<template>
  <div class="panel">
    仅允许输入标准的数字值，可定义范围
    <h1>1.基础用法</h1>
    <p>要使用它，只需要在el-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。</p>
    <div>
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <h1>2.禁用状态</h1>
    <p>disabled属性接受一个Boolean，设置为true即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置min属性和max属性，不设置min和max时，最小值为 0。</p>
    <div>
      <el-input-number v-model="num2" :disabled="true"></el-input-number>
    </div>
    <h1>3.步数 允许定义递增递减的步数控制</h1>
    <p>设置step属性可以控制步长，接受一个Number。</p>
    <div>
      <el-input-number v-model="num3" :step="2"></el-input-number>
    </div>
    <h1>4. 尺寸</h1>
    <p>额外提供了 medium、small、mini 三种尺寸的数字输入框</p>
    <div>
      <el-input-number v-model="num4"></el-input-number>
      <el-input-number size="medium" v-model="num5"></el-input-number>
      <el-input-number size="small" v-model="num6"></el-input-number>
      <el-input-number size="mini" v-model="num7"></el-input-number>
    </div>
    <h1>5.按钮位置</h1>
    <p>设置 controls-position 属性可以控制按钮位置。</p>
    <div>
      <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 5,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="scss" scoped>
.panel {
  > div {
    margin-top: 20px;
  }
}
</style>

