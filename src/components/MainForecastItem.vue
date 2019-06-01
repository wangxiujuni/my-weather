<template>
  <div :class="{[$style.wrapper]:true,[$style.border_left]:index!==0}">
    <!-- 解决中文括号的居中问题 -->
    <div style="padding-left:1em">{{state.day}}</div>
    <div :class="state.class" style="display:inline-block;width:50px;height:50px"></div>
    <div>{{state.wea}}</div>
    <div>风速{{state.win_speed}}</div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    state: {
      type: Object,
      required: true
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  display: inline-block;
  height: 150px;
  width: 120px;
  /* border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  padding-top: 1em;
  text-align: center;
  background-color: inherit;
}
.border_left {
  /* border-left: 1px solid rgba(0, 0, 0, 0.1); */
}
</style>
<style scoped>
@import url("./icons.css");
</style>

