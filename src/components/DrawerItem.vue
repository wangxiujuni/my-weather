<template funcional>
  <mu-slide-left-transition>
    <mu-list-item :style="selectStyle" button :ripple="false">
      <mu-list-item-content>
        <mu-list-item-title>{{city}}</mu-list-item-title>
        <mu-list-item-sub-title>{{province}}</mu-list-item-sub-title>
      </mu-list-item-content>

      <mu-list-item-action>
        <mu-button icon @click.stop="$emit('delete')">
          <mu-icon :color="color" value="remove_circle"></mu-icon>
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
      required: true
    },
    color: {
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
</style>
