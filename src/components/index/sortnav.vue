<template>
  <div class="index-nav">
    	<!--看图识人，心里指数-->
    	<div class="iNtop clear">
    		<div class="topNav align-left fl">
    			<img src="../../../static/img/look.png" />
    		</div>
    		<div class="topNav align-right fl">
    			<img src="../../../static/img/Heart.png" />
    		</div>
    	</div>
    	<!--导航-->
    	<div class="iNbottom">
    		<ul class='clear'>
    			<li class='clear fl algin-center '>
    				<div class="navListimg disI"><img src="../../../static/img/character.png" class="verM"></div>
    				<div class="navList disI align-left">
    					<p class="navN">性格倾向</p>
    					<p class="Weights">权威</p>
    				</div>
    			</li>
    			<li class='clear fl algin-center borderrN'>
    				<div class="navListimg disI"><img src="../../../static/img/Workplace.png" class="verM"></div>
    				<div class="navList disI align-left">
    					<p class="navN">职场人际</p>
    					<p class="Weights">权威</p>
    				</div>
    			</li>
    			<li class='clear fl algin-center borderbN'>
    				<div class="navListimg disI"><img src="../../../static/img/family.png" class="verM"></div>
    				<div class="navList disI align-left">
    					<p class="navN">婚恋家庭</p>
    					<p class="Weights">权威</p>
    				</div>
    			</li>
    			<li class='clear fl algin-center borderN'>
    				<div class="navListimg disI"><img src="../../../static/img/Mental-health.png" class="verM"></div>
    				<div class="navList disI align-left">
    					<p class="navN">心理健康</p>
    					<p class="Weights">权威</p>
    				</div>
    			</li>
    		</ul>
    	</div>
    </div>
</template>

<script>
export default{
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-nav{
	border-bottom:1px solid #D0D0D0;
	background:#fff;
	margin-top:.5rem;
}
.iNtop{
	padding:.5rem 0;
}
.iNtop .topNav{
	width:45.5%;
	margin-left:3%;
}
.iNtop .topNav img{
	width:100%;
}
.iNbottom ul li{
	width:50%;
	padding:.7rem;
	border-bottom:1px solid #EEEEEE;
	border-right:1px solid #EEEEEE;
}
.iNbottom ul li .navListimg{
	/*width:30%;*/
}
.iNbottom ul li .navListimg img{
	height:3.5rem;
	vertical-align:-0.5rem;
}
.iNbottom ul li .navList{
	padding-left:.5rem;
}
.iNbottom ul li .navList .navN{
	font-size:1.2rem;
	color:#373737;
}
.iNbottom ul li .navList .Weights{
	font-size:1rem;
	color:#9C9C9C;
}
.iNbottom ul li.borderrN{
	border-right:none;
}
.iNbottom ul li.borderN{
	border:none;
}
.iNbottom ul li.borderbN{
	border-bottom:none;
}
</style>
