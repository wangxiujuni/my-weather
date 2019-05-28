<template>
  <div>
    <mu-appbar color="primary">
      <mu-button icon slot="left" @click.stop="showDrawer">
        <mu-icon value="menu"></mu-icon>
      </mu-button>Title
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
    <mu-drawer :open.sync="open" :docked="true" :width="width" @click.native.stop>
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      width:0
    }
  },
  mounted(){
    this.width=window.innerWidth*0.45
  },
  methods: {
    showDrawer() {
      this.open = true
      document.onclick = () => {
        this.open = false
        document.onclick = null
      }
    }
  }
}
</script>

<style module lang="postcss">
</style>
