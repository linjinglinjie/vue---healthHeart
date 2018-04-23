<template>
	<section>
		<section class="coupContent">
			<section class="top">
				<nav ref="navscroll">
					<ul>
						<li v-for="(item,index) in coup" :key="index" :class="{'active': filtertype == item.type}" @click="showType(item.type)">{{item.name}}</li>
					</ul>
				</nav>
				<section class="search">
					<input type="text" placeholder="点击此处可提问..." />
					<a>
						<i class="icon iconfont">&#xe8b8;</i>
						提问
					</a>
				</section>
			</section>
			<section class="couplist">
				<transition name="fade">
					<couplist :filtertype="filtertype"></couplist>
				</transition>
			</section>
		</section>
		<foot></foot>
		<transition name="slide">
			<router-view :goBack="goBack" :headTitle="headTitle" :type="type"></router-view>
		</transition>
	</section>
</template>
<script>
import couplist from './coupList'
import foot from '../common/footer'
import BScroll from 'better-scroll'
export default {
	name:'Coup',
	data() {
		return {
			goBack: true,
			headTitle: '心妙招',
			coup:'',
			filtertype:'all',
			type: 'coupdes',
			scroll
		}
	},
	components: {
		couplist,
		foot
	},
	created() {
		this.$http.get('/api/coup').then((response) => {
			response = response.body;
			const ERR_OK = 0;
			if(response.errno == ERR_OK){
				this.coup = response.data;
			}
		})
	},
	mounted() {
		this.$nextTick(() => {
			this._initScroll()
			/*this.$nextTick(() => {
				this._initScroll()
			})*/
		})
	},
	methods: {
		_initScroll() {
			this.scroll = new BScroll(this.$refs.navscroll, { 
				click: true,
	            scrollX: true,
	            eventPassthrough: 'vertical',
	            listenScroll:true
			});
		},
		showType(value) {
			this.filtertype = value;
		}
		/*ulWidth() {
			let liList = this.$refs.li
			let liWidth = liList[0].offsetWidth
			this.styleObject.width = liList.length * liWidth +'px'
			console.log(liList.length * liWidth +'px')
		}*/
	}
}
</script>
<style scoped>
.coupContent {
	position:relative;
}
.top{
	position: fixed;
	width:100%;
	top:0rem;
	left: 0;
}
nav{
	overflow: hidden;
	background: #fff;
	border-bottom:1px solid #ddd;
}
nav ul {
	height:3.5rem;
	line-height:3.5rem;
	white-space: nowrap;
	width:42rem;
}
nav ul li {
	display: inline-block;
	padding:0 1rem;
	width:7rem;
	text-align: center;
	font-size:1.1rem;
	color:#656565;
}	
nav ul li.active {
	color: #34BE7B;
	position: relative;
}
nav ul li.active::after{
	position: absolute;
	display: block;
	content: ' ';
	width:100%;
	height:2px;
	background:#34BE7B;
	bottom:0;
	left: 0;
}
.search {
	background: #fff;
	padding:1rem;
	border-bottom: 1px solid #ddd;
}
.search input[type="text"] {
	width: 77.5%;
	height:2.5rem;
	line-height: 2.5rem;
	border: 1px solid #36BD7B;
	box-shadow: 0 0 5px #36BD7B;
    border-radius: 10px 0 0 10px;
    padding-left: 2%;
    background: #EEF9F3;
    color: #000;
    margin-right: .5%;
    font-size: 1rem;
    vertical-align: top;
}
.search a {
	vertical-align: top;
	display: inline-block;
	background: #A2E0C0;
	border: 1px solid #36BD7B;
	border-radius:0 5px 5px 0;
    height: 2.5rem;
    width: 20%;
    line-height: 2.5rem;
    color:#377857;
    font-size: 1.2rem;
}
.search a .icon {
	font-size: 1.2rem;
	margin-left:.2rem;
}
.couplist{
	margin-top:7.5rem;
}
.slide-enter-active, .slide-leave-active {
	transition:all .4s;
}
.slide-enter, .slide-leave-active {
	transform: translateX(100%);
	opacity: 0;
}
</style>