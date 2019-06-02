<template>
<div :class="$style.wrapper">
  <div :class="$style.title">空气质量</div>
  <mu-row :class="$style.row" align-items="center">
    <mu-col span="4">
      <mu-linear-progress mode="determinate" :value="30" :max="300"></mu-linear-progress>
    </mu-col>
    <mu-col span="2">
      <div class="grid-cell"></div>
    </mu-col>
    <mu-col span="6">
      <div class="grid-cell"></div>
    </mu-col>
  </mu-row>
</div>
</template>

<script>
export default {}
</script>

<style module lang="postcss">
.row{
  height: 150px;
  border-top: 1px solid rgba(0, 0, 0, .1)
}
.wrapper {

}
.title{
  font-size: 12px;
}
</style>
