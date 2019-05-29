<template>
  <div>
    <mu-appbar :color="color">
      <mu-button icon slot="left" @click.stop="showDrawer">
        <mu-icon value="menu"></mu-icon>
      </mu-button>Title

      <mu-button icon slot="right" @click="addRotate">
        <mu-icon ref="refresh" value="refresh"></mu-icon>
      </mu-button>

      <mu-menu slot="right">
        <mu-button flat>MENU</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 1</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 2</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>

    <Drawer :drawerOpen="drawerOpen" :color="color" @search="$emit('search')"></Drawer>
  </div>
</template>

<script>
import Drawer from "./Drawer"

export default {
  components: {
    Drawer
  },
  props:{
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      drawerOpen: false
    }
  },
  methods: {
    showDrawer() {
      this.drawerOpen = true
      document.onclick = () => {
        this.drawerOpen = false
        document.onclick = null
      }
    },
    //设置点击旋转效果
    addRotate(){
      //为icon动态添加class，在完成后移除class
      const temp=this.$refs.refresh.className
      //拼串有一个空格
      this.$refs.refresh.className+=` ${this.$style.rotate}`
      setTimeout(()=>{this.$refs.refresh.className=temp},2000)
    }
  }
}
</script>

<style module lang="postcss">
.rotate{
  transform: rotate(360deg);
  transition: transform linear 2s;
}
</style>
