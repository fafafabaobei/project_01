<template>
  <div>
      <mt-header title="信息管理系统"></mt-header>
      <router-view></router-view>
      <mt-tabbar fixed v-model="selected">
        <mt-tab-item id="Home">
          <img slot="icon" src="../static/img/shouye.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="Member">
          <img slot="icon" src="../static/img/vip.png">
          会员
        </mt-tab-item>
        <mt-tab-item id="Shopcar">
          <img slot="icon" src="../static/img/gouwuche.png">
          购物车
        </mt-tab-item>
        <mt-tab-item id="Mi">
          <img slot="icon" src="../static/img/gengduo.png">
          我的
        </mt-tab-item>
      </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected:''
    }
  },
  watch:{
    //不能使用箭头函数，因为this会向上绑定
    selected:function(newV,oldV){
      this.$router.push({
        name:newV
      })
    }
  }
}
</script>

<style>
</style>
