<template>
	<section>
		<section class="expert-center myCenterTop">
			<personhead :avatar="personAvatar" :expertName="presonName">
				<router-link to="/my/personcenter" class="personal poa" slot="person">
					<i class="icon iconfont">&#xe607;</i>
				</router-link>
			</personhead>
			<section class="TestQuestions">
				<ul class="clear">
					<li class="algin-center por" :class='{active:changeShowType=="text"}' @click="changeShow('text')">我的测试<em class="point disI poa"></em></li>
					<li class="algin-center por" :class='{active:changeShowType=="qustion"}' @click="changeShow('qustion')">我的提问<em class="point disI poa"></em></li>
				</ul>
			</section>
		</section>
		<!--测试提问列表-->
		<section class="myCenterTab">
			<transition name="fade">
			<section class="Witty myCenterList myTest" v-show="changeShowType == 'text'" ref="myTest">
				<ul>
		    		<li class="clear">
		    			<section class="fl Witty-img"><img src="/static/img/listimg.png" class="verM"/></section>
		    			<section class="fl Witty-right">
		    				<section class="Witty-title">
		    					你离抑郁症还有多远vcv
		    				</section>
		    				<section class="Introduction">
		    					你离抑郁症还有多远你离抑郁症还有多远你离你离抑郁症还有多远你离抑郁症还有多远你离
		    				</section>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<section class="fl Witty-img"><img src="/static/img/listimg.png" class="verM"/></section>
		    			<section class="fl Witty-right">
		    				<section class="Witty-title">
		    					你离抑郁症还有多远
		    				</section>
		    				<section class="Introduction">
		    					你离抑郁症还有多远你离抑郁症还有多远你离
		    				</section>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<section class="fl Witty-img"><img src="/static/img/listimg.png" class="verM"/></section>
		    			<section class="fl Witty-right">
		    				<section class="Witty-title">
		    					你离抑郁症还有多远
		    				</section>
		    				<section class="Introduction">
		    					你离抑郁症还有多远你离抑郁症还有多远你离你离抑郁症还有多远你离抑郁症还有多远你离你离抑郁症还有多远你离抑郁症还有多远你离
		    				</section>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<section class="fl Witty-img"><img src="/static/img/listimg.png" class="verM"/></section>
		    			<section class="fl Witty-right">
		    				<section class="Witty-title">
		    					你离抑郁症还有多远
		    				</section>
		    				<section class="Introduction">
		    					你离抑郁症还有多远你离抑郁症还有多远你离你离抑郁症还有多远你离抑郁症还有多远你离你离抑郁症还有多远你离抑郁症还有多远你离
		    				</section>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<section class="fl Witty-img"><img src="/static/img/listimg.png" class="verM"/></section>
		    			<section class="fl Witty-right">
		    				<section class="Witty-title">
		    					你离抑郁症还有多远
		    				</section>
		    				<section class="Introduction">
		    					你离抑郁症还有多远你离抑郁症还有多远你离你离抑郁症还有多远你离抑郁症还有多远你离你离抑郁症还有多远你离抑郁症还有多远你离
		    				</section>
		    			</section>
		    		</li>
		    	</ul>
			</section>
			</transition>
			<transition name="fade">
			<section class="Witty myCenterList myQuestions" v-show="changeShowType == 'qustion'" ref="myQuestions">
				<ul>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI alanswered">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI alanswered">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI alanswered">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI alanswered">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI alanswered">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI alanswered">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI alanswered">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    		<li class="clear">
		    			<p class="myQuestionsT">什么是心理健康？</p>
		    			<section class="myQuestionsB clear">
		    				<span class="fl">
		    					2017-03-15
		    				</span>
		    				<span class="fr disI alanswered">
		    					未回答
		    				</span>
		    			</section>
		    		</li>
		    	</ul>
			</section>
			</transition>
		</section>
		<foot></foot>
		<transition name="slide">
			<router-view></router-view>
		</transition>
	</section>
</template>
<script>
	import foot from '../common/footer'
	import personhead from '../common/personhead'
	import BScroll from 'better-scroll'
	export default {
		name:'my',
		data () {
			return {
				changeShowType:'text',
				personAvatar:'expert-toux.png',
				presonName:'蔺婧',
				textScroll: null,
				myQuestions: null
			}
		},
		components: {
			foot,
			personhead
		},
		mounted() {
			this.textScroll = new BScroll(this.$refs.myTest, {
                click: true,
            }),
            this.myQuestions = new BScroll(this.$refs.myQuestions, {
                click: true,
            })
		},
		methods: {
			changeShow(value){
				if(value=='text'){
					this.changeShowType='text';
					this.$nextTick(() => {
						this.textScroll.refresh();
					})
				}else if(value=="qustion"){
					this.changeShowType='qustion';
					this.$nextTick(() => {
						this.myQuestions.refresh();
					})
				}
			}
		},
		watch: {
		
		}
	}
</script>
<style scoped>
.expert-center .personal{
	right:1.5rem;
	top:1.5rem;
}
.personal .icon{
	font-size:2.2rem;
	color:#fff;
}
.Witty-img {
    width: 23%;
}
.Witty-img img {
    width: 100%;
}
.Witty-right {
    width: 77%;
    padding-left: 1rem;
}
.Witty-title {
    font-size: 1.2rem;
    color: #373737;
}
.Introduction {
    font-size: 1rem;
    color: #9C9C9C;
}
.expert-center .TestQuestions{
	bottom:0;
	left:0;
	right:0;
	border-top:1px solid #EEEEEE;
}
.expert-center .TestQuestions li{
	float:left;
	width: 50%;
	height:3rem;
	line-height: 3rem;
	background: rgba(255,255,255,.5);
	border-bottom:2px solid transparent;
	color:#40403E;
	font-size: 1.2rem;
}
.expert-center .TestQuestions li em.point{
	width:.4rem;
	height:.4rem;
	background: #f00;
	border-radius:50%;
	top:1.2rem;
	margin-left:.4rem;
	transition: all 0.3s ease-in 0s;
}
.expert-center .TestQuestions li:first-child{
	border-right:1px solid #EEEEEE;
}
.expert-center .TestQuestions li.active{
	border-bottom:2px solid #268221;
	color:#ABF8A5;
}
.expert-center .TestQuestions li.active em.point{
	display: none;
}
.myCenterTab {
	position: absolute;
	left:0;
	right:0;
	top:14rem;
	bottom:3.5rem;
	margin:.5rem;
}
.myCenterList{
	background: transparent !important;
	height:100%;
	overflow: hidden;
}
.myCenterList ul li{
	background: #fff;
	border:none;
	padding:1rem .8rem;
	margin-bottom:.5rem;
	font-size: 1.2rem;
}
.myListactive{
	transition: all 0.3s ease-in 0s;
}
.myQuestions .myQuestionsT{
    color: #373737;
    margin-bottom:.8rem;
}
.myQuestions .myQuestionsB{
	color:#989898;
}
.myQuestions .myQuestionsB span:first-child{
	
}
.myQuestions .myQuestionsB span:last-child{
	border:1px solid #D2D2D2;
	color:#D2D2D2;
	padding:.1rem .5rem;
	border-radius:4px;
}
.myQuestions .myQuestionsB span:last-child.alanswered{
	border:1px solid #36BD7D;
	color:#36BD7D;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-leave, .fade-leave-active {
    display: none;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
.slide-enter-active, .slide-leave-active{
	transition: all .5s;
}
.slide-enter, .slide-leave-active{
	transform: translateX(100%);
	opacity:0;
}
</style>