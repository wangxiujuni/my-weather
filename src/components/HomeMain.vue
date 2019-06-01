<template>
  <main :class="$style.wrapper">
    <MainWeather
      v-if="state.tem"
      :state="state"
    ></MainWeather>
    <MainForecast :state="state"></MainForecast>
    <MainAirQuality></MainAirQuality>
    <MainDetail></MainDetail>
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
    color: {
      type: String,
      default: "primary"
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

<style module lang="postcss">
.wrapper {
  background: #64b5f6;
  height: 100vh;
}
</style>

