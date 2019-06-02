<template>
  <div>
    <HomeHeader
      :color="color"
      :title="title"
      :drawerState="drawerState"
      @search="$emit('search')"
      @pick="toggleCity"
      @delete="deleteDrawItem($event)"
      @refresh="refresh"
    ></HomeHeader>
    <HomeMain :color="color" :state="state" v-loading="loading" @updated="mainUpdated"></HomeMain>
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
      drawerState: [],
      loading: false
    }
  },
  computed: {
    title() {
      for (let i = 0; i < this.drawerState.length; i++) {
        const element = this.drawerState[i]
        if (element.isSelect) {
          return element.city
        }
      }
      return "myWeather"
    }
  },

  watch: {
    //citydata变动，表示select添加了新城市
    cityData(newValue) {
      this.loading = true
      //将所有抽屉设置为未选中
      this.drawerState.forEach(element => {
        element.isSelect = false
      })
      //将当前项选中，push入drawer
      const drawerItem = {
        province: newValue.provinceZh + "," + newValue.leaderZh,
        city: newValue.cityZh,
        isSelect: true,
        id: newValue.id,
        isIp: false
      }
      this.drawerState.push(drawerItem)
      console.log("bianle", newValue)
    },
    //drawer变动，表示删除或新增了数据，重新获取天气
    drawerState(newValue) {
      console.log("biandong")
      //如果是默认的ip获取数据，因为获取过了不用重复获取
      if (newValue.isIp) {
        return
      }
      //如果没有城市清空数据
      if (newValue.length === 0) {
        this.state = {}
      }
      newValue.forEach(element => {
        if (element.isSelect) {
          this.axios
            .get(
              `https://www.tianqiapi.com/api/?version=v6&cityid=${element.id}`
            )
            .then(res => {
              console.log(res)
              if (res.status >= 400) {
                this.$toast.error("服务器出错，请稍后再试")
                return
              }
              this.state = res.data
            })
            .catch(err => {
              this.$toast.error("服务器出错，请稍后再试" + err)
            })
        }
      })
    }
  },

  mounted() {
    //如果没有城市根据ip获取天气
    if (this.drawerState.length === 0) {
      this.axios
        .get(`https://www.tianqiapi.com/api/?version=v6`)
        .then(res => {
          console.log(res)
          if (res.status >= 400) {
            this.$toast.error("服务器出错，请稍后再试")
            return
          }
          const drawerItem = {
            province: '',
            city: res.data.city,
            isSelect: true,
            id: res.data.cityid,
            isIp: true
          }
          this.drawerState.push(drawerItem)
          this.state = res.data
        })
        .catch(err => {
          this.$toast.error("服务器出错，请稍后再试" + err)
        })
    }
  },

  methods: {
    toggleCity(id) {
      this.loading = true
      this.drawerState.forEach(element => {
        if (element.id === id) {
          element.isSelect = true
        } else {
          element.isSelect = false
        }
      })
      //触发drawer变动以获取数据
      this.drawerState.splice(0, 0)
    },

    deleteDrawItem(index) {
      //如果删除最后一项则不用触发
      if (index !== 0 && this.drawerState[index].isSelect) {
        this.drawerState[index - 1].isSelect = true
      }
      this.drawerState.splice(index, 1)
    },

    refresh() {
      this.drawerState.splice(0, 0)
    },

    //main更新完毕隐藏加载图
    mainUpdated() {
      this.loading = false
    }
  }
}
</script>

<style module lang="postcss">
</style>
