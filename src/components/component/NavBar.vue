<template>
	<div fixed class="tem">
		<mt-header :title="title">
		  <div @click="gobeike" slot="left">
		 <mt-button icon="back">返回</mt-button>
		  </div>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
</template>

<script>
export default {
	props:['title'],
  name: 'nav-ber',
  methods:{
  	gobeike(){
  		this.$router.go(-1)
  	}
  },
  data () {
    return {
    	
    }
  }
}
</script>

<style lang="css" scoped>
	.tem .mint-header{
		background-color: #cad6df;
	}
</style>