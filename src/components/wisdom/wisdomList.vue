<template>
	<section>
		<div class="Witty" num='34'>
	    	<slot name="title"></slot>
	    	<ul>
	    		<li class="clear" v-for="(item, index) in wisdom" :key="index">
	    			<div class="fl Witty-img"><img :src="'/static/img/'+item.avatarImg" class="verM"/></div>
	    			<div class="fl Witty-right">
	    				<div class="Witty-title">
	    					{{item.title}}
	    				</div>
	    				<div class="Introduction">
	    					{{item.descript}}
	    				</div>
	    				<div class="operating">
	    					<span>
	    						<img src="/static/img/listlook.png" class="verM"/>
	    						<em class="verM">{{item.look}}</em>
	    					</span>
	    					<span>
	    						<img src="/static/img/message.png" class="verM"/>
	    						<em class="verM">{{item.messege}}</em>
	    					</span>
	    					<span>
	    						<img src="/static/img/zan.png" class="verM"/>
	    						<em class="verM">{{item.like}}</em>
	    					</span>
	    				</div>
	    			</div>
	    		</li>
	    	</ul>
	    </div>
	    <loading name="loading" v-if="loadingShow"></loading>
    </section>
</template>
<script>
import loading from '../common/loading'
export default {
	name:'wisdomList',
	data() {
		return {
			wisdom: '',
			loadingShow: false
		}
	},
	created() {
		this.loadingShow = true;
		this.$http.get('/api/wisdom').then((response) => {
			response = response.body;
			const ERR_OK = 0;
		      if (response.errno === ERR_OK) {
		        this.wisdom = response.data;
		        this.loadingShow = false;
		      }
		})
	},
	components: {
		loading
	}
}
</script>
<style scoped>
.Witty{
	background:#fff;
	margin-top:.5rem;
}
.Witty>ul li{
	padding:1rem .8rem;
	border-bottom:1px solid #EEEEEE;
}
.Witty-img{
	width:23%;
	height:6.5rem;
}
.Witty-img img{
	width:100%;
	height:100%
}
.Witty-right{
	width:77%;
	padding-left:1rem;
}
.Witty-title{
	font-size:1.2rem;
	color:#373737;
}
.Introduction{
	font-size:1rem;
	color:#9C9C9C;
}
.operating span{
	padding-right:2rem;
}
.operating span img{
	width:1.5rem;
}
.operating span em{
	font-size:.8rem;
}
.loading-enter-active, .loading-leave-active {
	transition:opacity .4s
}	
.loading-enter, .loading-leave-active{
	opacity:0;
}
</style>