<template>
	<section class="experdes">
		<div class="expert-center">
		<personhead :avatar="expert.avart" :expertName="expert.name">
			<p slot="back" class="poa goback" @click="$router.go(-1)">
				<i class="icon iconfont">&#xe660;</i>
			</p>
		</personhead>
		<div class="person-resume">
			<ul class="flex">
				<li class="algin-center">
					<p class="top">{{expert.yearsWork}}</p>
					<p class="bottom">从业年数</p>
				</li>
				<li class="algin-center">
					<p class="top">{{expert.helppersonNum}}</p>
					<p class="bottom">帮助人数</p>
				</li>
				<li class="algin-center">
					<p class="top">{{expert.advisory}}</p>
					<p class="bottom">咨询</p>
				</li>
				<li class="algin-center">
					<p class="top">{{expert.thankNums}}</p>
					<p class="bottom">收到感谢</p>
				</li>
			</ul>
		</div>
	</div>
	<!--简介&&领域-->
	<div class="Introduction-area">
		<div class="list">
			<span class="title disI">
				专家简介
			</span>
			<div class="depict">
				{{expert.decript}}
			</div>
		</div>
		<div class="list area">
			<span class="title disI">
				擅长领域
			</span>
			<div class="depict">
				<span class="disI" v-for="(item, index) in expert.post" :key="index">{{item}}</span>
			</div>
		</div>
	</div>
	<div class="expert-tab">
	    <div class="tabs">
	        <a href="javascript:void(0);" :class="{active: tabShow == 'qustion', hot: qustionHot == true}" @click="tabShow='qustion'">问答</a>
	        <a href="javascript:void(0);" :class="{active: tabShow == 'Lesson', hot: LessonHot == true}" @click="tabShow='Lesson'">微课</a>
	        <a href="javascript:void(0);" :class="{active: tabShow == 'advisory', hot: advisoryHot == true}" @click="tabShow='advisory'">咨询</a>
	    </div>    
		<transition name="fade">
			<div class="content-slide" v-show="tabShow == 'qustion'">
		            	<div class="qAa">
		            		<form action="" method="post">
		            			<p>一句话概述您的问题</p>
		            			<input type="text" class="qusition" placeholder="在此简要说明您的问题...."/>
		            			<p>问题详述<span>请注意您的隐私</span></p>
		            			<textarea class="Problemdetails" name="" rows="" cols=""></textarea>
		            			<search></search>
		            		</form>
		            		<ul class="qAaList">
		            			<li>
		            				<a href="">
		            					<span>恋爱家庭</span>
		            					一个剩女的自由
		            				</a>
		            			</li>
		            			<li>
		            				<a href="">
		            					<span>心理健康</span>
		            					四招拯救
		            				</a>
		            			</li>
		            			<li>
		            				<a href="">
		            					<span>恋爱家庭</span>
		            					一个剩女的自由
		            				</a>
		            			</li>
		            			<li>
		            				<a href="">
		            					<span>心理健康</span>
		            					四招拯救
		            				</a>
		            			</li>
		            		</ul>
		            		
		            	</div>
		           </div>
		</transition>    
		<transition name="fade">
			<div class="content-slide" v-show="tabShow == 'Lesson'">
		       <healthList></healthList>     	
		    </div>
		</transition>   
		<transition name="fade">      
			<div class="content-slide" v-show="tabShow == 'advisory'">
		                         咨询  	
		    </div>
		</transition>   
</div>
	</section>
</template>
<script>
	import search from '../common/search'
	import healthList from '../healthHeart/child/healthList'
	import personhead from '../common/personhead'
	export default {
		name:'expertdes',
		data () {
			return {
				expertid: null,
				qustionHot: true,
				LessonHot: true,
				advisoryHot: false,
				tabShow: 'qustion',
				expertnum: '',
				expert: ''
			}
		},
		created() {
			this.expertid = this.$route.query.expertid;
			this.$http.get('/api/expertList').then((response) => {
				response = response.body;
				const ERR_OK = 0;
		      if (response.errno === ERR_OK) {
		        this.expertnum = response.data;
		        for (let item of this.expertnum) {
		        	if(item.id == this.expertid){
						this.expert = item 
					}
		        }
				
		      }
			})
			
		},
		components: {
			search,
			healthList,
			personhead
		}
	}
</script>
<style scoped>
.expert-center{
	position: fixed;
	top:0;
	width:100%;
}
.experdes{
	position:absolute;
	top:0;
	left:0;
	right:0;
	z-index: 18;
	background:#F4F5F7;
}
.goback{
	left:.5rem;
	top:1rem;
	color:#fff;
}
.goback .icon{
	font-size:1.8rem;
}
.person-resume{
	background:#B3E2CD;
}
.person-resume li{
	padding:.6rem 0;
}
.person-resume li .top{
	font-size:1.2rem;
	color:#34BE7B;
	margin-bottom:.3rem;
}
.person-resume li .bottom{
	color:#666;
	font-size:1.1rem;
}
/*领域和简介*/
.Introduction-area{
	margin:.8rem;
	margin-top:16.5rem;
}
.Introduction-area .list{
	background: #fff;
	margin-top:.8rem;
}
.Introduction-area .list span.title{
	background: #36BD7B;
	margin-left:.8rem;
	font-size:1rem;
	color:#fff;
	height:2rem;
	line-height:2rem;
	padding:0 .5rem;
}
.Introduction-area .list .depict{
	line-height:1.8rem;
	font-size:1.1rem;
	padding:.8rem 1rem;
}
.area .depict span{
	border:1px solid #37BC7D;
	border-radius:4px;
	color:#37BC7D;
	padding:0 .4rem;
	margin-right:.8rem;
	font-size: 1rem;
}
/*tab切换*/
.tabs{
	height:3rem;
	background:#fff;
}
.tabs a{
	display:block;
	float:left;
	width:33.33%;
	color:#333;
	text-align:center;
	line-height:3rem;
	font-size:1.2rem;
	text-decoration:none;
	border-right:1px solid #eee; 
	border-bottom:.3rem solid #fff;
	transition: all 0.3s ease-in 0s;
}
.tabs a.hot{
	background: url(../../../static/img/hot.png) no-repeat right top;
	background-size:2.3rem ;
}
.tabs a.active{
	color:#37BC7D;
	border-bottom:.3rem solid #37BC7D;
}
.content-slide{
	min-height:370px;
	background:#fff;
}
.content-slide .qAa{
	padding:0 1.2rem 0 1.2rem;
}
.content-slide .qAa form p{
	color:#373737;
	font-size:1.1rem;
	margin:.8rem 0;
}
.content-slide .qAa form p span{
	font-size: .8rem;
	color:#C5C7C6;
	margin-left:.8rem;
}
.content-slide .qAa form input.qusition,
.content-slide .qAa form textarea.Problemdetails{
	border-radius:4px;
	font-size: .8rem;
	height: 2.5rem;
    border: 1px solid #36BD7B;
    box-shadow: 0 0 5px #36BD7B;
    padding-left: .5rem;
    background: #EEF9F3;
    color: #CACECD;
    width:100%;
    background: #EEF9F3;
    color:#C3C7C6;
}
.content-slide .qAa form textarea.Problemdetails{
	height:5rem;
	padding:.5rem;
}
.qAa .expertTop{
	margin-top:.5rem;
}
.qAaList{
	margin-top:.7rem;
	background:#fff;
	padding-bottom:1rem;
}
.qAaList li{
	margin:.6rem 0;
	font-size:1.1rem;
}
.qAaList li span{
	color:#35BE7B;
}
.fade-enter-active, .fade-leave-active{
	transition:opacity .4s;
}
.fade-enter, .fade-leave-active{
	opacity:0
}
</style>