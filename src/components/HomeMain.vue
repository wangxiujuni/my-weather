<template>
  <main :class="$style.wrapper">
    <MainWeather
      v-if="state.tem"
      :state="state"
    ></MainWeather>
  </main>
</template>

<script>
import MainWeather from "./MainWeather"

export default {
  components: {
    MainWeather
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

