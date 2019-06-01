<template>
  <div :class="$style.wrapper">
    <MainForecastItem
      v-for="(item,index) in forecastState"
      :state="item"
      :index="index"
      :key="index"
    ></MainForecastItem>
  </div>
</template>

<script>
import MainForecastItem from "./MainForecastItem"
import selectIcon from "./icon"

export default {
  components: {
    MainForecastItem
  },
  props: {
    state: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      forecastState: []
    }
  },
  watch: {
    state(newValue) {
      //当状态为空时拦截请求
      if (JSON.stringify(newValue) === "{}") {
        return
      }
      this.axios
        .get(
          `https://www.tianqiapi.com/api/?version=v1&cityid=${
            this.state.cityid
          }`
        )
        .then(res => {
          console.log(res, 1)
          if (res.status >= 400) {
            this.$toast.error("服务器出错，请稍后再试")
            return
          }
          this.forecastState = res.data.data
          //为state添加class属性，用于显示图标，都是白天
          this.forecastState.forEach(element => {
            element.class = ["icon"]
            console.log(element, 2)

            selectIcon(element.class, element.wea_img, "12:00")
          })
        })
        .catch(err => {
          this.$toast.error("服务器出错，请稍后再试" + err)
        })
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  height: 150px;
  white-space: nowrap;
  overflow-y: hidden;
}
</style>

<style scoped>
</style>

