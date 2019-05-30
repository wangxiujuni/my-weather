<template>
  <div>
    <keep-alive include="Home">
      <component
        :is="renderComponent"
        :color="color"
        :cityData="cityData"
        @search="toggleToSearch"
        @back="toggleToHome"
        @cityclick="getCity"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./components/Home"
import Search from "./components/Search"

export default {
  components: {
    Home,
    Search
  },
  data() {
    return {
      renderComponent: Home,
      //当前查看的城市id
      cityData: {},
      //主题颜色
      color: "#42a5f5"
    }
  },
  methods: {
    toggleToSearch() {
      this.renderComponent = Search
    },
    toggleToHome() {
      this.renderComponent = Home
    },
    getCity(data) {
      this.cityData = data
    }
  }
}
</script>

<style>
</style>
