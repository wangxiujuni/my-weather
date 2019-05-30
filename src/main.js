import Vue from "vue"
import App from "./App.vue"
import "muse-ui/lib/styles/base.less"
import "muse-ui/lib/styles/theme.less"
import {
  AppBar,
  Menu,
  Button,
  List,
  Icon,
  Drawer,
  TextField,
  Grid,
  Divider
} from "muse-ui"
import Helpers from "muse-ui/lib/Helpers" //transition组件使用
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(AppBar)
  .use(Menu)
  .use(Button)
  .use(List)
  .use(Icon)
  .use(Drawer)
  .use(Helpers)
  .use(TextField)
  .use(Grid)
  .use(Divider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
