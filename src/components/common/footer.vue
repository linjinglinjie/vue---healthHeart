<template>
	<div class="indexBNav">
    	<ul class="flex">
    		<router-link tag="li" to="/main" class="algin-center">
    			<i class="icon iconfont">&#xe646;</i>
    			<p>首页</p>
    		</router-link>
    		<router-link tag="li" to="/Healthy" class="algin-center">
    			<i class="icon iconfont">&#xe6bb;</i>
    			<p>健心</p>
    		</router-link>
    		<router-link tag="li" to="/expert" class="algin-center expert">
    			<i class="icon iconfont">&#xe6c9;</i>
    			<p>专家</p>
    		</router-link>
    		<router-link tag="li" to="/Coup" class="algin-center">
    			<i class="icon iconfont">&#xe605;</i>
    			<p>妙招</p>
    		</router-link>
    		<router-link tag="li" to="/my" class="algin-center">
    			<i class="icon iconfont">&#xe627;</i>
    			<p>我的</p>
    		</router-link>
    		
    	</ul>
    </div>
</template>
<script>
export default {
  name: 'foot',
  data () {
    return {
	    }
  }
}
</script>
<style scoped>
.indexBNav{
	position:fixed;
	bottom:0;
	left:0;
	right:0;
	background: #fff;
}
.indexBNav li{
	padding:.3rem 0;
	width:20%;
	background: #fff;
	font-size:1rem;
	border-top:1px solid #D0D0D0;
}
.indexBNav li.router-link-active .icon,.indexBNav li.router-link-active p{
	color:#45C285;
}
.indexBNav li .icon{
	font-size:2.2rem;
}
.indexBNav li.expert{
	margin-top:-20px;
	border-radius:50%;
	border-top:1px solid #D0D0D0;
}
.indexBNav li.expert .icon{
	font-size:3.5rem;
}
.indexBNav li.expert p{
	margin-top:-.1rem;
}
</style>