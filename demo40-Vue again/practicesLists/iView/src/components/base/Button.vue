<template>
<section>
  <h1>1.使用type设置类型，使用plain来定义是否中空，使用round来设置是否半角</h1>
<div>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div>

<div style="margin: 20px 0">
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</div>

<div>
  <el-button round>圆形按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</div>

<h1>2.禁用状态 -> 按钮不可用状态。 你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</h1>

<div>
  <el-button disabled>默认按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>
</div>

<div style="margin-top: 20px">
  <el-button plain disabled>朴素按钮</el-button>
  <el-button type="primary" plain disabled>主要按钮</el-button>
  <el-button type="success" plain disabled>成功按钮</el-button>
  <el-button type="info" plain disabled>信息按钮</el-button>
  <el-button type="warning" plain disabled>警告按钮</el-button>
  <el-button type="danger" plain disabled>危险按钮</el-button>
</div>

<h1>3.文字按钮 没有边框和背景色的按钮。type="text"</h1>
<div style="margin-top: 20px">
  <el-button type="text">文字按钮</el-button>
  <el-button type="text" disabled>文字按钮</el-button>
</div>

<h1>4.图标按钮 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。设置icon属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签即可，可以使用自定义图标。</h1>

<div style="margin-top: 20px">
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
  <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
</div>

<h1>5. 按钮组 使用el-button-group标签来嵌套你的按钮。</h1>
<div style="margin-top: 20px">
  <el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
</el-button-group>
</div>

<h1>6. 加载中 点击按钮后进行数据加载操作，在按钮上显示加载状态。要设置为 loading 状态，只要设置loading属性为true即可</h1>
<div style="margin-top: 20px">
  <el-button type="primary" :loading="true">加载中</el-button>
</div>

<h1>7. 不同尺寸 Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。 额外的尺寸：medium、small、mini，通过设置size属性来配置它们。</h1>
<div style="margin-top: 20px">
  <el-button>默认按钮</el-button>
  <el-button size="medium">中等按钮</el-button>
  <el-button size="small">小型按钮</el-button>
  <el-button size="mini">超小按钮</el-button>
</div>
<div style="margin-top: 20px">
  <el-button round>默认按钮</el-button>
  <el-button size="medium" round>中等按钮</el-button>
  <el-button size="small" round>小型按钮</el-button>
  <el-button size="mini" round>超小按钮</el-button>
</div>
</section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

</style>
