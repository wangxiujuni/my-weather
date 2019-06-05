<template>
  <div>
    <div :class="$style.title">
      空气质量
      <span style="float:right">污染物单位:μm/m³</span>
    </div>
    <mu-row :class="$style.row" align-items="center">
      <mu-col span="4">
        <div :class="$style.air">{{state.air}}</div>
        <mu-linear-progress mode="determinate" :value="+state.air" :max="300" :color="color"></mu-linear-progress>
      </mu-col>
      <mu-col span="2">
        <div>{{state.air_level}}</div>
      </mu-col>
      <mu-col span="6" :class="$style.pm" align-self="start">
        <div>pm2.5:{{state.air_pm25}}</div>
        <div :class="$style.tips">{{state.air_tips}}</div>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Object,
      required: true
    }
  },
  computed: {
    color() {
      const air = this.state.air
      if (air <= 50) {
        return "green"
      }
      if (air <= 100) {
        return "yellow"
      }
      if (air <= 150) {
        return "orange"
      }
      if (air <= 200) {
        return "red"
      }
      if (air <= 300) {
        //紫红色
        return "#ad1457"
      }
      //褐红色
      return "#bf360c"
    }
  }
}
</script>

<style module lang="postcss">
.row {
  height: 150px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 12px;
}
.air {
  font-size: 30px;
  text-align: center;
  margin-bottom: 1em;
}
.pm {
  font-size: 17px;
  padding: 10px 0;
}
.tips {
  font-size: 13px;
  margin-top: 40px;
}
</style>
