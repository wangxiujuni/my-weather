<template>
  <div>
    <div :class="$style.title">详细信息</div>
    <mu-row :class="$style.wrapper">
      <mu-col span="4">
        <div :class="$style.windmill"></div>
        <div :class="$style.windmillRod"></div>
      </mu-col>
      <mu-col span="8" :class="$style.details">
        <div>
          <mu-icon :class="$style.icon" size="24" value="toys"></mu-icon>
          风：{{state.win}}{{state.win_speed}}{{state.win_meter}}
        </div>
        <div>
          <mu-icon :class="$style.icon" size="24" value="invert_colors"></mu-icon>
          相对湿度：{{state.humidity}}
        </div>
        <div>
          <mu-icon :class="$style.icon" size="24" value="visibility"></mu-icon>
          能见度：{{state.visibility}}
        </div>
        <div>
          <mu-icon :class="$style.icon" size="24" value="explorer"></mu-icon>
          气压：{{state.pressure}} 毫巴
        </div>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Object,
      required: true
    }
  },
  methods: {
    name() {
      history.length
    }
  }
}
</script>

<style module lang="postcss">
.wrapper {
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 12px;
}
.windmill {
  width: 100%;
  padding: 50% 0;
  background: url("../assets/images/windmill.svg");
  background-size: contain;
  animation: rotate 1s linear infinite;
}
.windmillRod {
  width: 100%;
  padding: 50% 0;
  margin-top: -50%;
  background: url("../assets/images/windmill-rod.svg");
  background-size: contain;
}
.icon {
  vertical-align: top;
}
.details {
  margin: auto 0;
  padding-left: 20px !important;/* 解决使用ui库未知的无法设置padding的问题 */
}
.details > div {
  margin: 2px 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
