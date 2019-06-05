<template>
  <div>
    <mu-appbar :color="color1">
      <mu-button icon slot="left" @click.stop="showDrawer">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      {{title}}
      <mu-button icon slot="right" @click="addRotate">
        <mu-icon ref="refresh" value="refresh"></mu-icon>
      </mu-button>

      <mu-menu slot="right" :open.sync="menuOpen">
        <mu-button flat>
          <mu-icon value="more_vert"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click.native="$emit('color');closeMenu()">
            <mu-list-item-content>
              <mu-list-item-title>
                <mu-icon value="color_lens" :class="$style.icon"></mu-icon>主题颜色
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>

    <HeaderDrawer
      :drawerOpen="drawerOpen"
      :drawerState="drawerState"
      :color1="color1"
      @search="$emit('search');closeDrawer()"
      @pick="$emit('pick',$event);closeDrawer()"
      @delete="$emit('delete',$event)"
    ></HeaderDrawer>
  </div>
</template>

<script>
import HeaderDrawer from "./HeaderDrawer"

export default {
  components: {
    HeaderDrawer
  },
  props: {
    color1: {
      type: String,
       required:true
    },
    drawerState: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      drawerOpen: false,
      menuOpen: false
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
    addRotate() {
      //为icon动态添加class，在完成后移除class
      const temp = this.$refs.refresh.className
      //拼串有一个空格
      this.$refs.refresh.className += ` ${this.$style.rotate}`
      setTimeout(() => {
        this.$refs.refresh.className = temp
      }, 2000)

      //发射刷新事件
      this.$emit("refresh")
    },

    //search上调用为了解决keep-alive造成的切换回home显示draw离开动画问题
    closeDrawer() {
      this.drawerOpen = false
    },

    closeMenu(){
      this.menuOpen =false
    }
  }
}
</script>

<style module lang="postcss">
.rotate {
  transform: rotate(360deg);
  transition: transform linear 2s;
}
.icon{
  vertical-align: top
}
</style>
