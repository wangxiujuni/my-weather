<template>
  <div>
    <mu-list-item button>
      <mu-list-item-title>{{city}}</mu-list-item-title>
      <mu-list-item-sub-title>{{province}}</mu-list-item-sub-title>
    </mu-list-item>
    <mu-divider></mu-divider>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      required:true
    },
    province:{
      type:String,
      required:true
    }
  },
}
</script>

<style module lang="postcss">
</style>
