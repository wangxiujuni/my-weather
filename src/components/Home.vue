<template>
  <div>
    <HomeHeader :color="color" :title="title" :drawerState="drawerState" @search="$emit('search')" @pick="updateIsSelect"></HomeHeader>
    <HomeMain :color="color"></HomeMain>
  </div>
</template>

<script>
import HomeMain from "./HomeMain"
import HomeHeader from "./HomeHeader"

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeMain
  },
  props: {
    color: {
      type: String,
      default: "primary"
    },
    cityData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      //全局天气数据状态
      state: {},
      //抽屉list状态
      drawerState: []
    }
  },
  computed:{
    title(){
      for (let i = 0; i < this.drawerState.length; i++) {
        const element = this.drawerState[i]
        if (element.isSelect) {
          return element.city
        }
      }
      return 'myWeather'
    }
  },
  watch: {
    cityData(newValue) {
      this.axios
        .get(`https://www.tianqiapi.com/api/?version=v6&cityid=${newValue.id}`)
        .then(res => {
          this.state = res.data
        })
        //将所有抽屉设置为未选中
        this.drawerState.forEach((element)=>{
          element.isSelect=false
        })
        //将当前项选中，push入drawer
        const drawerItem={
          province:newValue.provinceZh+','+newValue.leaderZh,
          city:newValue.cityZh,
          isSelect:true
        }
        this.drawerState.push(drawerItem)
        console.log("bianle", newValue)
    }
  },
  methods: {
    updateIsSelect(city) {
      this.drawerState.forEach((element)=>{
        if (element.city===city) {
          element.isSelect=true
        }else{
          element.isSelect=false
        }
      })
    }
  },
}
</script>

<style module lang="postcss">
</style>
