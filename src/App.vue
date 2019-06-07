<template>
  <div>
    <keep-alive include="Home,SelectColor">
      <component
        :is="renderComponent"
        :color1="color1"
        :color2="color2"
        :cityData="cityData"
        @search="toggleToSearch"
        @back="toggleToHome"
        @cityclick="getCity"
        @color="toggleToColor"
        @select-color="selectColor"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./components/Home"
import Search from "./components/Search"
import SelectColor from "./components/SelectColor"

export default {
  data() {
    return {
      renderComponent: Home,
      //当前查看的城市数据，api无法拿到省市信息所以不能直接使用id
      //search传过来的
      cityData: {},
      //框架颜色
      color1: "#0288d1",
      //背景颜色
      color2: "#29b6f6"
    }
  },
  created() {
    if (localStorage.getItem("color")) {
      const colorObj = JSON.parse(localStorage.getItem("color"))
      this.color1 = colorObj.color1
      this.color2 = colorObj.color2
    }
  },
  methods: {
    toggleToSearch() {
      this.renderComponent = Search
    },
    toggleToHome() {
      this.renderComponent = Home
    },
    toggleToColor() {
      this.renderComponent = SelectColor
    },
    getCity(data) {
      this.cityData = data
    },
    selectColor(data) {
      localStorage.setItem("color", JSON.stringify(data))
      this.color1 = data.color1
      this.color2 = data.color2
    }
  }
}
</script>

<style>
</style>
