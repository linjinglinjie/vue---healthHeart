<template>
	<section>
		<section class="expertNav">
		<!--搜索-->
	    <search></search>
	    <section class="expertBottom">
	    	<ul class="clear">
	    		<li class="algin-center fl">
	    			<section class="">
	    				<img src="/static/img/expertFamily.png"/>
	    			</section>
	    			<p>婚恋家庭</p>
	    		</li>
	    		<li class="algin-center fl">
	    			<section class="">
	    				<img src="/static/img/Lovepsychology.png"/>
	    			</section>
	    			<p>恋爱心理</p>
	    		</li>
	    		<li class="algin-center fl">
	    			<section class="">
	    				<img src="/static/img/Sexualpsychology.png"/>
	    			</section>
	    			<p>性心理</p>
	    		</li>
	    		<li class="algin-center fl">
	    			<section class="">
	    				<img src="/static/img/Parentingeducation.png"/>
	    			</section>
	    			<p>亲子教育</p>
	    		</li>
	    		<li class="algin-center fl">
	    			<section class="">
	    				<img src="/static/img/personalrelation.png"/>
	    			</section>
	    			<p>人际关系</p>
	    		</li>
	    		<li class="algin-center fl">
	    			<section class="">
	    				<img src="/static/img/medicine.png"/>
	    			</section>
	    			<p>恋爱心理</p>
	    		</li>
	    		<li class="algin-center fl">
	    			<section class="">
	    				<img src="/static/img/WorkplacePsychology.png"/>
	    			</section>
	    			<p>职场心理</p>
	    		</li>
	    		<li class="algin-center fl">
	    			<section class="">
	    				<img src="/static/img/Personalgrowth.png"/>
	    			</section>
	    			<p>个人成长</p>
	    		</li>
	    	</ul>
	    </section>
	</section>
	<!--推荐专家-->
	<section class="recommend-expert Witty">
		<section class="title p15">
			推荐专家
		</section>
		<ul>
			<router-link :to="{path:'/expert/expertdes', query:{ expertid: item.id }}" tag="li" class="clear" v-for="(item, index) in expertList" :key="index">
				<section class="expert-Avatar fl">
					<img :src="'/static/img/'+item.avart" class="verM"/>
				</section>
				<section class="expert-synopsis fl">
					<p class="fullName">{{item.name}}</p>
					<p class="status">
						<em v-for="(post, index) in item.post" :key="index">{{post}}</em>
					</p>
					<p class="expert-summary Introduction">
						{{item.decript}}
					</p>
				</section>
			</router-link>
		</ul>
	</section>
	<foot></foot>
	<transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>
    <loading v-if="loadingShow"></loading>
	</section>
</template>
<script>
	import search from '../common/search'
	import foot from '../common/footer'
	import loading from '../common/loading'
	export default {
		name:'expert',
		data () {
			return {
				expertList: null,
				loadingShow: false
			}
		},
		created() {
			this.loadingShow = true;
			this.$http.get('/api/expertList').then((response) => {
				response = response.body;
				const ERR_OK = 0;
				if(response.errno == ERR_OK){
					this.expertList = response.data;
					this.loadingShow = false;
				}
				
			})
		},
		components: {
			foot,
			search,
			loading
		}
	}
</script>
<style scoped>
	/*专家*/
.expertNav{
	background: #fff;
	margin-top:.5rem;
	border-bottom:1px solid #D0D0D2;
	padding:10px 20px;
}
.expertBottom li{
	width:25%;
	margin-top:20px;
	font-size:1.1rem;
	color:#373737
}
.expertBottom li img{
	height:3rem;
}
/*推荐专家*/
.recommend-expert{
	margin-top:.5rem;
	background: #fff;
	padding-bottom:6rem;
}
.recommend-expert .title{
	height:3rem;
	line-height:3rem;
	color:#666;
	font-size: 1.2rem;
	border-bottom:1px solid #eee;
}
.recommend-expert li{
	padding:1rem 15px;
	border-bottom: 1px solid #EEEEEE;
}
.recommend-expert .expert-Avatar{
	width:23%;
	border-radius:50%;
	overflow: hidden;
}
.recommend-expert .expert-Avatar img{
	width:100%;
	border-radius:50%;
}
.recommend-expert .expert-synopsis{
	width: 77%;
    padding-left: 1rem;
}
.expert-synopsis .fullName{
	font-size:1.2rem;
	color:#373737;
}
.expert-synopsis .status{
	margin:.5rem 0;
}
.expert-synopsis .status em{
	color:#32BD7A;
	margin-right:1rem;
	font-style:italic;
	font-size:.9rem;
}
.expert-synopsis .expert-summary{
	font-size: 1.1rem;
    color: #9C9C9C;
    margin-top:2px;
}
.router-slid-enter-active, .router-slid-leave-active{
	transition:all 0.4s;
}
.router-slid-enter, .router-slid-leave-active{
	opacity:0;
	transform: translate3d(2rem, 0, 0);
}
</style>