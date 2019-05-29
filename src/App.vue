<template>
  <div>
    <component :is="renderComponent" :color="color" @search="toggleComponent"></component>
  </div>
</template>

<script>
import Home from "./components/Home"
import Search from "./components/Search"


export default {
  components:{
    Home,
    Search
  },
  data() {
    return {
      renderComponent:Home,
      //当前查看的城市id
      cityId:0,
      //主题颜色
      color:'#42a5f5'
    }
  },
  methods:{
    toggleComponent(){
      this.renderComponent=Search
    }
  }
}
</script>

<style>

</style>
