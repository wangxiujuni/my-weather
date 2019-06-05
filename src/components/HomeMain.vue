<template>
  <main class="main" :style="{background:color2}">
    <MainWeather :state="state"></MainWeather>
    <MainForecast :state="state"></MainForecast>
    <MainAirQuality :state="state"></MainAirQuality>
    <MainDetail :state="state"></MainDetail>
  </main>
</template>

<script>
import MainWeather from "./MainWeather"
import MainForecast from "./MainForecast"
import MainAirQuality from "./MainAirQuality"
import MainDetail from "./MainDetail"

export default {
  components: {
    MainWeather,
    MainForecast,
    MainAirQuality,
    MainDetail
  },
  props: {
    color2: {
      type: String,
       required:true
    },
    state: {
      type: Object,
      required: true
    }
  },
  updated() {
    this.$emit("updated")
  }
}
</script>

<style>
.main{
  color:white
}
</style>

