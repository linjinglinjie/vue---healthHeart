<template>
	<section class="header por">
		<span v-if="goBack" class="back poa" @click="$router.go(-1)">
			<i class="icon iconfont">&#xe660;</i>
		</span>
		<p v-if="headTitle" class="headtitle algin-center">{{headTitle}}</p>
	</section>
</template>
<script>
export default {
	data() {
		return {
			
		}
	},
	props: ['headTitle','goBack']
}
</script>
<style scoped>
.header{
	background:#32BD7A ;
	position:fixed;
	z-index: 99;
	top:0;
	left:0;
	width:100%;
	height:4rem;
	line-height:4rem;
	
}
.back{
	left:1rem;
	top:.3rem;
}
.back .icon{
	font-size:1.8rem;
	color:#fff;
}
.headtitle{
	font-size: 1.5rem;
	color:#fff;
}
</style>