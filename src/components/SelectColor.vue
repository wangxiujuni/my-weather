<template>
  <div>
    <mu-appbar :color="color1">
      <mu-button icon slot="left" @click="$emit('back')">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>主题颜色
    </mu-appbar>
    <div v-for="(item,index) in colorList" :class="$style.itemWrapper" :key="index">
      <SelectColorItem
        :color1="item.color1"
        :color2="item.color2"
        :colorName="item.colorName"
        :isSelect="item.isSelect"
        @click.native="selectColor(item);$emit('select-color',{color1:item.color1,color2:item.color2})"
      ></SelectColorItem>
    </div>
  </div>
</template>

<script>
import SelectColorItem from "./SelectColorItem"

export default {
  name:'SelectColor',
  components: {
    SelectColorItem
  },
  props: {
    color1: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      colorList: [
        {
          color1: "#0288d1",
          color2: "#29b6f6",
          colorName: "湖光蓝",
          isSelect: true
        },
        {
          color1: "#f57c00",
          color2: "#ffa726",
          colorName: "活力橙",
          isSelect: false
        },
        {
          color1: "#512da8",
          color2: "#7e57c2",
          colorName: "魅力紫",
          isSelect: false
        }
      ]
    }
  },
  created(){
    this.colorList.forEach((element)=>{
      if (element.color1===this.color1) {
        element.isSelect=true
      }else{
        element.isSelect=false
      }
    })
  },
  methods: {
    selectColor(item) {
      this.colorList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true
    }
  }
}
</script>

<style module lang="postcss">
.itemWrapper {
  display: inline-flex;
  justify-content: center;
  width: 50%;
  padding-top: 10%;
}
</style>
