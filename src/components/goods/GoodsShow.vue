<template>
<div>
		<nav-ber :title='title'/>
		<div>
			<ul>
			<li>
				<a href="">
					<img src="" alt="">
						<div></div>
						<div>
							<div class="sell">
								<span></span>
								<s></s>
							</div>
							<div class="detail">
								<div class="hot"></div>
								<div class="count"></div>
							</div>
						</div>
				</a>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {

  name: 'GoodsShow',

  data () {
    return {
    	title:'商品列表'
    }
  },
  created(){
  	//https://api.zhetaoke.com:10003/api/api_quanwang.ashx?appkey=718a9d6f35544d5198ab07de4ab386b5&page=1&page_size=20&sort=new&q=搜索内容
  }
}
</script>

<style lang="css" scoped>
</style>