<template>
  <div>


  <div>
    <mt-swipe :auto="6000">
      <mt-swipe-item v-for="(item,index) in imgs">
        <img class="lunbotu" :src="imgs[index].pic" :alt="imgs[index].name">
      </mt-swipe-item>
    </mt-swipe>
  </div>

  <div id="home">
    <ul>
      <li v-for="(router,index) in routers" :key='index'>
        <router-link :to="router.route">
          <span class="back-img" :class="router.className"></span>
          <div>{{router.title}}</div>
        </router-link>
      </li>
    </ul>
  </div>


  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs:[],
      routers:[
        {title:'新闻咨询',className:'back01',route:{name:'NewsList'}},
        {title:'天气查询',className:'back02',route:{name:'YueE'}},
        {title:'黑猫特价',className:'back03',route:{name:'GoodsShow',params:{page:1}}},
        {title:'地址定位',className:'back04',route:{name:'DingWei'}},
        {title:'搜索',className:'back05',route:{name:'SouSuo'}},
        {title:'更多',className:'back06',route:{name:'Mode'}}
      ]
    }
  },
  created(){
    this.$axios.get("https://api.zhetaoke.com:10001/api/api_lunbo.ashx?appkey=718a9d6f35544d5198ab07de4ab386b5")
    .then(res=>{
      console.log(res);
      this.imgs = res.data.content;
    })
    .catch(err=>console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
