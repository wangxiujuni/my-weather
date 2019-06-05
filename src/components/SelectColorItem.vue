<template>
  <div :class="$style.wrapper">
    <mu-paper :class="$style.paper" :z-depth="1">
      <div :style="{background:color1}"></div>
      <div :style="{background:color2}"></div>
      <mu-icon v-if="isSelect" :class="$style.icon" :size="24" value="check_circle_outline"></mu-icon>
    </mu-paper>
    <div :class="$style.colorName">{{colorName}}</div>
  </div>
</template>

<script>
export default {
  props: {
    color1: {
      type: String,
      required: true
    },
    color2: {
      type: String,
      required: true
    },
    colorName: {
      type: String,
      required: true
    },
    isSelect: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  width: 100px;
}
.paper {
  display: flex;
  position: relative;
  height: 100px;
}
.paper > div {
  width: 50%;
}
.icon {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #00e676;
}
.colorName{
  text-align: center;
  color: rgba(0, 0, 0,0.7)
}
</style>
