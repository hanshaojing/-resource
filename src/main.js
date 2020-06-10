import Vue from 'vue'
import MintUI from 'mint-ui' //在main.js中把所有的组件都导入进来
import 'mint-ui/lib/style.css'// 这里 可以省略 node_modules 这一层目录
Vue.use(MintUI) // 把所有的组件，注册为全局的组件  将 MintUI 安装到 Vue 中
import VueResource  from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000';
    // 全局配置
    Vue.http.options.emulateJSON = true;
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import app from './App.vue'
import { Header,Button ,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name,Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"
import 'bootstrap/dist/css/bootstrap.css'



var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
})
