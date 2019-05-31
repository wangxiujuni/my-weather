<template>
  <mu-drawer :open.sync="drawerOpen" :docked="true" :width="drawerWidth" @click.native.stop>
    <mu-list>
      <DrawerItem
        v-for="(item,index) in drawerState"
        :key="item.city"
        :province="item.province"
        :city="item.city"
        :isSelect="item.isSelect"
        :color="color"
        @delete="$emit('delete',index)"
        @click.native="$emit('pick',item.id)"
      ></DrawerItem>

      <mu-list-item button :ripple="false" @click="$emit('search')">
        <mu-list-item-action>
          <mu-icon value="add_circle" :color="color"></mu-icon>
        </mu-list-item-action>

        <mu-list-item-content>
          <mu-list-item-title>添加城市</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
import DrawerItem from "./DrawerItem"

export default {
  components: {
    DrawerItem
  },
  props: {
    drawerOpen: {
      type: Boolean,
      required: true
    },
    color: {
      type: String,
      default:'primary'
    },
    drawerState:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      drawerWidth: "45%"
    }
  },
  methods: {

  }
}
</script>

<style module lang="postcss">
</style>
