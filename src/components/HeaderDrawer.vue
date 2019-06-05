<template>
  <mu-drawer :open.sync="drawerOpen" :docked="true" :width="drawerWidth" @click.native.stop>
    <mu-list>
      <HeaderDrawerItem
        v-for="(item,index) in drawerState"
        :key="item.city"
        :province="item.province"
        :city="item.city"
        :isSelect="item.isSelect"
        :color1="color1"
        :isIp="item.isIp"
        @delete="$emit('delete',index)"
        @click.native="$emit('pick',{id:item.id,isIp:item.isIp})"
      ></HeaderDrawerItem>

      <mu-list-item button :ripple="false" @click="$emit('search')">
        <mu-icon value="add_circle" :color="color1"></mu-icon>
        <mu-list-item-content :class="$style.add">
          <mu-list-item-title>添加城市</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
import HeaderDrawerItem from "./HeaderDrawerItem"

export default {
  components: {
    HeaderDrawerItem
  },
  props: {
    drawerOpen: {
      type: Boolean,
      required: true
    },
    color1: {
      type: String,
       required:true
    },
    drawerState: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      drawerWidth: "45%"
    }
  },
  methods: {}
}
</script>

<style module lang="postcss">
.add{
  margin-left: 5px;
}
</style>
