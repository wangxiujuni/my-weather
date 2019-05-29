<template>
  <div>
    <mu-appbar :color="color">
      <mu-button icon slot="left">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>选择城市
    </mu-appbar>
    <mu-flex style="width:100%" justify-content="center">
      <mu-text-field v-model="input" :class="$style.input" :underline-color="color" placeholder="请输入城市名或拼音"></mu-text-field>
    </mu-flex>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      input: ""
    }
  }
}
</script>

<style module lang="postcss">
.input{
  padding-top: 30px;
}
</style>
