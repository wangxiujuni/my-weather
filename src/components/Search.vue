<template>
    <div>
      <mu-appbar :color="color">
        <mu-button icon slot="left" @click="$emit('back')">
          <mu-icon value="keyboard_arrow_left"></mu-icon>
        </mu-button>选择城市
      </mu-appbar>

      <mu-flex style="width:100%" justify-content="center">
        <mu-text-field
          ref="input"
          v-model="input"
          :class="$style.input"
          :underline-color="color"
          placeholder="请输入城市名或拼音"
        ></mu-text-field>
      </mu-flex>

      <mu-list :class="$style.list">
        <SearchItem
          v-for="item in renderResult"
          :key="item.id"
          :city="item.cityZh"
          :province="item.provinceZh+','+item.leaderZh"
          @click.native="$emit('cityclick',item);$emit('back')"
        ></SearchItem>
      </mu-list>
    </div>
</template>

<script>
import SearchItem from "./SearchItem"
import _ from "lodash"

export default {
  components: {
    SearchItem
  },
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  data() {
    return {
      input: "",
      renderResult: []
    }
  },
  watch: {
    input(newValue) {
      if (newValue === "") {
        return
      }
      //防抖
      _.debounce(
        () => {
          this.axios
            .get(newValue, { baseURL: "http://localhost:3000/", timeout: 1000 })
            .then(res => {
              //如果回调时输入为空清空列表
              if (this.input === "") {
                this.renderResult = []
                return
              }
              this.renderResult = res.data
            })
        },
        500,
        { maxWait: 1 }
      )()
    }
  },
  mounted() {
    //处理ui框架没有禁用拼写检查的接口的问题
    this.$refs.input.$refs.input.setAttribute("spellcheck", "false")
  }
}
</script>

<style module lang="postcss">
.input {
  padding-top: 30px;
}
.list {
  width: 80%;
  margin: 0 auto;
}
</style>
