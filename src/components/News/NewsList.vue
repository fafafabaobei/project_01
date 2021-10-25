<template>
	<div>
		<nav-ber :title='title'/>
		<!-- 新闻api：https://api.iyk0.com/ysxw/ -->
    <!-- 新闻列表 -->
    <div id="demo">
      <ul v-for="(news,index) in newsList" :key="index">
          <a :href="newsList[index].url">
            <li class="demo01">
              <div >
                <img :src="newsList[index].image">
              </div>
            </li>
            <li class="demo02">
              <h3>{{newsList[index].keywords}}</h3>
              <div>{{newsList[index].title}}</div>
              <p><span>发布时间：</span><span>{{newsList[index].focus_date}}</span></p>
            </li>
          </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  name: 'NewsList',
  data () {
    return {
    	title:"实时新闻",
      newsList: []
  }
},
  created(){
    this.$axios.get("https://api.iyk0.com/ysxw/")
    .then(res=>{
      console.log(res.data.data);
      this.newsList = res.data.data;
    })
    .catch(err=>console.log(err))
  }
}
</script>

<style lang="css" scoped>
  *{
    margin: 0;
   padding: 0;
 }
 #demo ul{
  height: 107.4px;
  width: 100%;
 }
 #demo li{
  float: left;
  height: 100%;
  list-style: none;
  border-bottom: 1px solid #ccc;
 }
.demo01,.demo01 img{
  width: 130px;
  height: 100%;
 }
 .demo02{
  position: relative;
  width: 230px;
  font-size: 12px;
 }
 .demo02 h3{
  padding: 2px 0 5px 10px;
 }
 .demo02 p{
  position: absolute;
  left: 3px;
  bottom: 10px;
  color: red;
 }
 #demo{
  margin-bottom: 133px;
 }
</style>