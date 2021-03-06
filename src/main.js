import Vue from "vue"
import App from "./App.vue"
import "muse-ui/lib/styles/base.less"
import "muse-ui/lib/styles/theme.less"
import 'muse-ui-loading/dist/muse-ui-loading.css' // load css
import {
  AppBar,
  Menu,
  Button,
  List,
  Icon,
  Drawer,
  TextField,
  Grid,
  Divider,
  Progress,
  Snackbar,
  Paper
} from "muse-ui"
import Helpers from "muse-ui/lib/Helpers" //transition组件使用
import Loading from 'muse-ui-loading'
import Toast from 'muse-ui-toast'

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
  .use(Progress)
  .use(Snackbar)
  .use(Paper)

Vue.use(Loading).use(Toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
