// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局样式
import  '../static/css/globle.css'
Vue.config.productionTip = false

//Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//引入axios
import Axios from 'axios'
//给Vue原型挂载$axios属性
Vue.prototype.$axios = Axios;
//Axios.defaults.baseURL ='https://api.zhetaoke.com:10001/api/api_lunbo.ashx?appkey=718a9d6f35544d5198ab07de4ab386b5';

//定义拦截器
//1、请求发起前显示loding open()
Axios.interceptors.request.use(function(config){
  MintUI.Indicator.open({
    text:'玩命加载中...',
    spinnerType:'fading-circle'
  });
  return config;
})
//请求响应回来关闭loading close()
Axios.interceptors.response.use(function(response){
  //reponse:{config:{},data:{},headers}
  //接受响应头或者响应体中的数据，保存起来，供亲求的拦截器中使用头信息操作
  MintUI.Indicator.close();
  return response;
}) 


//全局组件
import NavBar from './components/component/NavBar';
Vue.component(NavBar.name,NavBar);