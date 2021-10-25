import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member/Member'
import Shopcar from '@/components/Shopcar/Shopcar'
import Mi from '@/components/Mi/Mi'
import NewsList from '@/components/News/NewsList'
import GoodsShow from '@/components/goods/GoodsShow'
import YueE from '@/components/YueE/YueE'
import Mode from '@/components/Mode/Mode'
import DingWei from '@/components/DingWei/DingWei'
import SouSuo from '@/components/Sousuo/SouSuo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/mi',
      name: 'Mi',
      component: Mi
    },
    {
      path:'/news/list',
      name:'NewsList',
      component:NewsList
    },
    {
      path:'goods/list/:page',
      name:'GoodsShow',
      component:GoodsShow
    },
    {
      path:'yuee/list/',
      name:'YueE',
      component:YueE
    },
    {
      path:'dingwei/list/',
      name:'DingWei',
      component:DingWei
    },
    {
      path:'mode/list/',
      name:'Mode',
      component:Mode
    },
    {
      path:'suo/list/',
      name:'SouSuo',
      component:SouSuo
    }
  ]
})
