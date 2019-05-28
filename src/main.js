import Vue from 'vue'
import App from './App.vue'
import 'muse-ui/lib/styles/base.less'
import { AppBar,Menu,Button,List,Icon,Drawer } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'

Vue.use(AppBar).use(Menu).use(Button).use(List).use(Icon).use(Drawer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
