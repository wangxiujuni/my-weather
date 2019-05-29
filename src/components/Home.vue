<template>
  <div>
    <HomeHeader :color="color" @search="$emit('search')"></HomeHeader>
    <HomeMain :color="color"></HomeMain>
  </div>
</template>

<script>
import HomeMain from "./HomeMain"
import HomeHeader from "./HomeHeader"

export default {
  components: {
    HomeHeader,
    HomeMain
  },
  props: {
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      //全局天气数据状态
      state: {}
    }
  }
}
</script>

<style module lang="postcss">
</style>
