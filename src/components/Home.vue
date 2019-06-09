<template>
  <div>
    <HomeHeader
      :color1="color1"
      :title="title"
      :drawerState="drawerState"
      @search="$emit('search')"
      @pick="toggleCity"
      @delete="deleteDrawItem($event)"
      @refresh="refresh"
      @color="$emit('color')"
    ></HomeHeader>
    <HomeMain :color2="color2" :state="state" v-loading="loading" @updated="mainUpdated"></HomeMain>
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
    color1: {
      type: String,
      required: true
    },
    color2: {
      type: String,
      required: true
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
      loading: false,
      //如果是通过mounted的ip获取的数据，则不用重新获取
      isFirst: false
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
      return ""
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
      //缓存变动
      localStorage.setItem("drawerState", JSON.stringify(this.drawerState))
      //如果没有城市清空数据
      if (newValue.length === 0) {
        this.state = {}
      }
      newValue.forEach(element => {
        if (element.isSelect) {
          //如果是默认的ip获取数据，因为获取过了不用重复获取
          if (this.isFirst) {
            this.isFirst = false
            return
          }
          fetch(
            `https://www.tianqiapi.com/api/?version=v6&cityid=${element.id}`
          )
            .then(res => res.json())

            .then(res => {
              console.log(res)
              if (res.status >= 400) {
                this.$toast.error("服务器出错，请稍后再试")
                return
              }
              this.state = res
            })
            .catch(err => {
              this.$toast.error("服务器出错，请稍后再试" + err)
            })
        }
      })
    }
  },

  created() {
    if (localStorage.getItem("drawerState")) {
      const state = localStorage.getItem("drawerState")
      this.drawerState = JSON.parse(state)
    }
  },

  mounted() {
    //如果没有城市根据ip获取天气
    if (this.drawerState.length === 0) {
      this.loading = true
      this.isFirst = true
      fetch(`https://www.tianqiapi.com/api/?version=v6`)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (res.status >= 400) {
            this.$toast.error("服务器出错，请稍后再试")
            return
          }
          const drawerItem = {
            province: "",
            city: res.city,
            isSelect: true,
            id: res.cityid,
            isIp: true
          }
          this.drawerState.push(drawerItem)
          this.state = res
        })
        .catch(err => {
          this.$toast.error("服务器出错，请稍后再试" + err)
        })
    }
  },

  methods: {
    toggleCity(data) {
      console.log(data)

      this.drawerState.forEach(element => {
        if (element.id === data.id) {
          element.isSelect = true
        } else {
          element.isSelect = false
        }
      })
      this.loading = true
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
