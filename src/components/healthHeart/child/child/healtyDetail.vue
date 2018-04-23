<template>
	<section class="healtyDetail">
		<headcom :goBack="goBack" :headTitle="headTitle"></headcom>
		<section class="content">
			<section class="content-title">{{content.title}}</section>
			<section class="content-Name">
				<p class="fl">{{content.name}}</p>
				<p class="fr">{{content.datatime}}</p>
			</section>
			<section class="multimedia por" v-if="this.type == 'healtydes'">
				<section class="mediastyle poa" v-if="content.type=='video'">视频</section>
				<section class="mediastyle poa" v-if="content.type=='audio'">音频</section>
				<video controls="controls" v-if="content.type=='video'">
				  <source :src="content.url" type="video/mp4">
					Your browser does not support the video tag.
				</video>
				<audio controls="controls" v-if="content.type=='audio'">
				  <source :src="content.url" type="audio/mpeg">
				Your browser does not support the audio tag.
				</audio>
			</section>
			<section class="Tricklist" v-if="this.type == 'coupdes'">
				<ul>
					<li class="Case" v-if="content.case">
						<span class="title">案例</span>
						<p>{{ content.case }}</p>
					</li>
					<li class="analysis" v-if="content.analysis">
						<span class="title">分析</span>
						<p>{{ content.analysis }}</p>
					</li>
					<li class="Tips" v-if="content.Tips">
						<span class="title">锦囊妙计</span>
						<ul>
							<li v-for="(item, index) in content.Tips" :key="index">
								<span class="num">{{ index+1 }}</span>
								<div>
									<h1>{{item.title}}</h1>
									<p>{{item.descript}}</p>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section class="discuss">
				<input type="text" placeholder="我要说两句..." v-model="rating" >
				<input type="button" value="发送" @click="publish">
			</section>
			<section class="ratings">
				<p class="title">最新评论</p>
				<ul>
					<li v-for="(item, index) in ratings" :key="index">
						<section class="top">
							<p class="fl">
								<img :src="item.img">
								<span>{{item.name}}</span>
							</p>
							<p class="fr datatime">
								{{item.datatime}}
							</p>
							<div class="clear"></div>
						</section>
						<section class="bottom">
							{{item.content}}
						</section>
					</li>
				</ul>
			</section>
		</section>
	</section>
</template>
<script>
import headcom from '../../../common/head'
import {format} from '../../../../../static/js/plug/format.js'
export default {
	name:'healtyDetail',
	data() {
		return {
			rating: '',
			desid: '',
			content: '',
			ratings: [
				{
					img:'../../../../../static/img/default.png',
					name:'蔺婧',
					datatime:'2017-10-27',
					content:'评论区域'
				},
				{
					img:'../../../../../static/img/default.png',
					name:'苏三',
					datatime:'2017-10-20',
					content:'老师讲的很好，瞬间心里舒服多了！'
				},
				{
					img:'../../../../../static/img/default.png',
					name:'李四',
					datatime:'2017-10-17',
					content:'评论区域'
				}
			]
		}
	},
	props: ['goBack', 'headTitle', 'type'],
	created() {
		this.desid = this.$route.query.id;
		if(this.type == 'healtydes'){
			this.$http.get('/api/healthList').then((response) => {
				response = response.body;
				const ERR_OK = 0;
				if(response.errno == ERR_OK){
					for(let item of response.data){
						if(item.id == this.desid){
							this.content = item;
						}
					}
				}
			})
		}else if(this.type == 'coupdes'){
			this.$http.get('/api/couplist').then((response) => {
				response = response.body;
				const ERR_OK = 0;
				if(response.errno == ERR_OK){
					for(let item of response.data){
						if(item.id == this.desid){
							this.content = item;
						}
					}
				}
			})
		}
		/**/
	},
	components: {
		headcom
	},
	methods: {
		publish() {
			let dataTime = new Date().format("yyyy-MM-dd hh:mm:ss");
			if(this.rating == ""){
				alert("评论内容不可以为空哦！")
				return false
			}else{
				this.ratings.unshift(
					{
						img:'../../../../../static/img/default.png',
						name:'蔺婧',
						datatime:dataTime,
						content:this.rating
					}
				)
				this.rating = ""
			}
		}
	}
}
</script>
<style scoped>
.healtyDetail {
	position: absolute;
	top:0;
	left: 0;
	width:100%;
	min-height:100%;
	background:#F4F5F7;
}
.content {
	margin-top:4rem;
}
.content-title {
	height:3.5rem;
	line-height: 3.5rem;
	background: #289160;
	padding:0 1rem;
	color:#fff;
	font-size:1.3rem;
}
.content-Name {
	height:3rem;
	line-height: 3rem;
	padding:0 1rem;
	background: #34BD7D;
	border-top:1px solid #ddd;
	color:#fff;
}
.multimedia {
	background:#FCE6C9;
	margin:1rem;
	padding:1rem;
	margin-bottom:0rem;
}
.mediastyle {
	background:url('../../../../../static/img/video.png') no-repeat left top;
	background-size:100% 100%;
	left:-.2rem;
	top:0;
	width:8rem;
	height:2.5rem;
	line-height: 2.3rem;
	text-align: center;
	font-size:1.1rem;
	color:#fff;
}
.multimedia video {
	width:100%;
	height:12rem;
	margin-top:2rem;
}
.multimedia audio {
	width:100%;
	margin-top:2rem;
}
.discuss {
	padding:1rem 2rem;
}
.discuss input[type="text"] {
	height: 2.5rem;
    border: 1px solid #36BD7B;
    -webkit-box-shadow: 0 0 5px #36BD7B;
    box-shadow: 0 0 5px #36BD7B;
    border-radius: 10px 0 0 10px;
    width: 77.5%;
    padding-left: 2%;
    background: #EEF9F3;
    color: #CACECD;
    margin-right: .5%;
    font-size: 1rem;
    color:#000;
}
.discuss input[type="button"] {
	background: #9CDBBD;
	border: 1px solid #36BD7B;
	-webkit-box-shadow: 0 0 5px #36BD7B;
    box-shadow: 0 0 5px #36BD7B;
    border-radius: 5px;
	height: 2.5rem;
    width: 20%;
    color:#387656;
} 
.ratings {
	background: #fff;
}
.ratings .title{
	padding:.5rem 1rem;
	color:#000;
	font-size: 1.2rem;
}
.ratings ul li{
	padding:1rem;
	border-bottom:1px solid #D2D2D2;
}
.ratings ul li .top{
	margin-bottom:1rem;
}
.ratings ul li .bottom{
	padding-left:3rem;
	color:#666;
	font-size: 1.1rem;
}
.ratings ul li .top .fl{
	color:#999;
	font-size:1rem;
}
.ratings ul li .top .fl img{
	width:2.5rem;
	height:2.5rem;
	border-radius:50%;
	border:1px solid #D4D4D4;
	vertical-align: middle;
	margin-right:.5rem;
}
.ratings ul li .top .datatime{
	font-size:.8rem;
	line-height:2.5rem;
}
.Tricklist li{
	position: relative;
	padding:3rem 1rem 1rem 1rem;
	margin:1rem;
	min-height:3rem;
	font-size:1.1rem;
	line-height:1.8rem;
	color:#656766;
}
.Tricklist li.Case{
	background: #D9F5FF;
}
.Tricklist li.analysis{
	background: #E9FBCB;
}
.Tricklist li.Tips{
	background: #FCE6C8;
}
.Tricklist li span{
	position: absolute;
	top:0;
	left:-.2rem;
	display: inline-block;
	width:8rem;
	height:2.5rem;
	line-height: 2.3rem;
	text-align: center;
	font-size:1.1rem;
	color:#fff;
}
.Tricklist li.Case span{
	background:url('../../../../../static/img/icon45.png') no-repeat left top;
	background-size:100% 100%;
}
.Tricklist li.analysis span{
	background:url('../../../../../static/img/icon46.png') no-repeat left top;
	background-size:100% 100%;
}
.Tricklist li.Tips span{
	background:url('../../../../../static/img/icon47.png') no-repeat left top;
	background-size:100% 100%;
}
.Tricklist li.Tips ul li{
	position: relative;
	margin:.8rem 0;
	background: #FFF7CD;
	color:#656766;
	padding:2rem 1rem 1rem 1rem;
}
.Tricklist li.Tips ul li span.num{
	background:url('../../../../../static/img/numbj.png') no-repeat left top;
	background-size:100% 100%;
	display: inline-block;
	position: absolute;
	top:0;
	left:.3rem;
	width:1.3rem;
	height:1.8rem;
	line-height: 1.6rem;
	font-size: 1rem;
	text-align: center;
	color:#fff;
}
.Tricklist li.Tips ul li h1{
	margin-bottom:.5rem;
	font-size: 1.4rem;
	font-weight: normal;
	color:#F09000;
}
</style>