<template>
  <mu-row :class="$style.wrapper" align-items="center">
    <mu-col span="3">
      <div :class="iconClass" style="height:75px;background-position-x:center"></div>
    </mu-col>
    <mu-col span="4">
      <div :class="$style.temp">{{state.tem}}°</div>
    </mu-col>
    <mu-col span="5">
      <div :class="$style.content">{{state.wea}}</div>
      <div :class="$style.content">空气{{state.air_level}}{{state.air}}</div>
    </mu-col>
  </mu-row>
</template>

<script>
import selectIcon from "./icon"

export default {
  props: {
    state:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
      iconClass: ["icon"]
    }
  },
  watch: {
    //每次数据变动重新加载img
    state: {
      immediate:true,
      handler() {        
        selectIcon(this.iconClass, this.state.wea_img, this.state.update_time)
      }
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  height: 200px;
  padding: 20px 5px;
  color: white;
}
.temp {
  font-size: 80px;
}
.content {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2em;
  transform: translateY(-0.5em);
}
</style>
<style scoped>
@import url("./icons.css");
</style>
