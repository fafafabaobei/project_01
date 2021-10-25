<template>
	<div>
    <nav-ber :title="title"/>
    <div>日期{{time}}</div>
    <div>空气质量{{tian_qi.air}}</div>
    <div>风速{{tian_qi.win_meter}}</div>
    <div>风力等级{{tian_qi.win_speed}}</div>
    <div>风向{{tian_qi.win}}</div>
    <div>白天温度(低温){{tian_qi.tem_night}}</div>
    <div>白天温度(高温){{tian_qi.tem_day}}</div>
    <div>实时温度{{tian_qi.tem}}</div>
    <div> 天气对应图标{{tian_qi.wea_img}}</div>
    <div>天气情况{{tian_qi.wea}}</div>
    <div>上次更新时间{{tian_qi.update_time}}</div>
    <div>城市名称{{tian_qi.city}}</div>
  </div>
</template>

<script>
export default {

  name: 'YueE',

  data () {
    return {
    	title:"天气查询",
      tian_qi:[],
      time:''
    }
  },
  created(){
    this.$axios.get("https://www.tianqiapi.com/free/day?appid=34868864&appsecret=fF9YPROt&unescape=1")
    .then(res=>{
      console.log(res);
      this.tian_qi = res.data;
    })
    .catch(err=>console.log(err))
      var d = new Date();
      d_yue = parseInt(d.getYear()/12);
      d_nain = parseInt(d.getFullYear());
      d_ri = parseInt(d.getDate());
      console.log(d_nain + "--" + d_yue + "--" + d_ri);
      console.log(d);
    this.time = get_time();
  },
  methods:{
    get_time(){
    }
  }
}
</script>

<style lang="css" scoped>
</style>