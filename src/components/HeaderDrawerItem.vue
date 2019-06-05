<template funcional>
  <mu-slide-left-transition>
    <mu-list-item :style="selectStyle" button :ripple="false">
      <mu-list-item-content>
        <mu-list-item-title>
          <span :class="$style.title">{{city}}</span>
          <mu-icon value="gps_fixed" v-if="isIp"></mu-icon>
        </mu-list-item-title>
        <mu-list-item-sub-title>{{province}}</mu-list-item-sub-title>
      </mu-list-item-content>

      <mu-list-item-action>
        <mu-button v-if="!isIp" icon @click.stop="$emit('delete')">
          <mu-icon :color="color1" value="remove_circle"></mu-icon>
        </mu-button>
      </mu-list-item-action>
    </mu-list-item>
  </mu-slide-left-transition>
</template>

<script>
export default {
  props: {
    province: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    isIp: {
      type: Boolean,
      default: false
    },
    color1: {
      type: String,
      required: true
    }
  },
  computed: {
    selectStyle() {
      return this.isSelect ? `border-bottom:2px solid ${this.color}` : ""
    }
  }
}
</script>

<style module lang="postcss">
.title {
  vertical-align: top;
}
</style>
