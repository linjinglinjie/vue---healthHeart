<template>
	<div class="personCenter">
		<comhead :headTitle="headTitle" :goBack="goBack"></comhead>
		<div class="person-information p15">
			<ul>
				<li class="centerList por center-Avatar">
					<p class="fl jobtitle">头像</p>
					<div class="fr">
						<img src="../../../../static/img/expert-toux.png" />
					</div>
					<em class="more poa">></em>
				</li>
				<li class="centerList clear por" @click="showedict = true">
					<p class="fl jobtitle">昵称</p>
					<p class="fr name" id="nickname">{{edictname}}</p>
					<em class="more poa">></em>
				</li>
				<li class="centerList clear por" id="sex" @click="showsex">
					<p class="fl jobtitle">性别</p>
					<p class="fr">{{sex}}</p>
					<em class="more poa">></em>
				</li>
				<li class="centerList clear por age">
					<p class="fl jobtitle">年龄</p>
					<p class="fr">
						<input type="text" name="age" id="age" value="1989-03-04" readonly="readonly" />
					</p>
					<em class="more poa">></em>
				</li>
				<li class="centerList clear por" id="job" @click="showJob">
					<p class="fl jobtitle">职业</p>
					<p class="fr">{{job}}</p>
					<em class="more poa">></em>
				</li>
			</ul>
		</div>
		<div class="personOther person-information p15">
			<ul>
				<li class="centerList clear por">
					<p class="fl jobtitle">我的账户</p>
					<p class="fr">165775454</p>
					<em class="more poa">></em>
				</li>
				<li class="centerList clear por">
					<p class="fl jobtitle">专家验证</p>
					<p class="fr">165775454</p>
					<em class="more poa">></em>
				</li>
				<li class="centerList clear por">
					<p class="fl jobtitle">团体用户验证</p>
					<p class="fr">165775454</p>
					<em class="more poa">></em>
				</li>
			</ul>
		</div>
		<!--修改昵称-->
		<transition name="slide">
		    <div class="edict-nickname" v-if="showedict">
		    	<div class="edict">
		    		<input type="text" class="name" value="" v-model="edictname" />
		    		<span class="align-right erro"></span>
		    		<input type="button" value="提交" @click="submitname"/>
		    	</div>
		    </div>
	    </transition>
	    <!--修改性别-->
	    <transition name="slideBtom">
	    	<edictList :edictclass="edictclass" v-if="showClass" @changename="changename" @edictshow="edictshow"></edictList>
	    </transition>
	    <transition name="fade">
	    	<section class="edictbg" v-if="showClass" @click="showClass = false"></section>
	    </transition>
	</div>
</template>
<script>
import comhead from '../../common/head'
import edictList from './edictList'
import '../../../../static/js/plug/LCalendar.min.js'
import '../../../../static/style/plug/LCalendar.min.css'
export default {
	name:'personcenter',
	data() {
		return {
			goBack: true,
			headTitle: '个人中心',
			showedict: false,
			showClass: false,
			edictname:'欧柔喜',
			job:'学生党',
			sex:'男',
			jobList: [{
				name:'学生党'
			},{
				name:'上班族'
			},{
				name:'全职父母'
			},{
				name:'商人'
			}],
			sexList: [{
				name:'男'
			},{
				name:'女'
			}],
			edictclass:''
		}
	},
	components: {
		edictList,
		comhead
	},
	mounted() {
		let calendar = new LCalendar();
		calendar.init({
			'trigger': '#age', //标签id
			'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
			'minDate': (new Date().getFullYear()-60) + '-' + 1 + '-' + 1, //最小日期
			'maxDate': (new Date().getFullYear()) + '-' + 12 + '-' + 31 //最大日期
		});
	},
	methods: {
		showsex() {
			this.edictclass = this.sexList;
			this.showClass = true;
		},
		showJob(){
			this.edictclass = this.jobList;
			this.showClass = true;
		},
		changename(value) {
			if(this.edictclass == this.sexList){
				this.sex = value;
				this.showClass = false;
			}else if(this.edictclass == this.jobList){
				this.job = value;
				this.showClass = false;
			}
			
		},
		submitname() {
			if(this.edictname==''){
				alert('姓名不得为空！');
				return
			}
			this.showedict = false
		},
		edictshow(){
			this.showClass = false;
		}
	}
}
</script>
<style scoped>
.personCenter{
	position: absolute;
	left:0;
	top:0;
	bottom:0;
	width:100%;
	background: #F4F5F7;
}
.person-information{
	margin-top:4.8rem;
	background: #fff;
}
.person-information .centerList{
	border-bottom:1px solid #eee;
	height:4rem;
	line-height:4rem;
}
.person-information .centerList p.jobtitle{
	font-size:1.2rem;
	color:#262626;
}
.person-information .centerList p.fr{
	font-size:1.2rem;
	color:#838280;
	margin-right:2rem;
}
.person-information .centerList .more{
	right:0rem;
	font-size:1.5rem;
}
.person-information .center-Avatar{
	height:5rem;
	line-height:5rem;
}
.person-information .center-Avatar .fr{
	margin-right:2rem;
	width:4rem;
	height:4rem;
	margin-top:.5rem;
	border-radius:50%;
	overflow: hidden;
	border:1px solid #C7C7C7;
}
.person-information .center-Avatar .fr img{
	width:100%;
}
.personOther{
	margin-top:.8rem;
}
.person-information .age input{
	border:none;
	text-align: right;
	color:#838280;
	font-size: 1.2rem;
	height:3.5rem;
}
/*修改昵称*/
.edict-nickname{
	position: absolute;
	width:100%;
	left:0;
	top:0;
	bottom:0;
	padding:5rem .5rem 0 .5rem;
	background: #fff;
}
.pushLeft{
	transition: all 0.3s ease 0s;
	left:-100%;
}
.edict-nickname .edict input[type="text"]{
	width:100%;
	height:3.5rem;
	padding-left:.8rem;
	color:#262626;
	font-size:1.2rem;
	border:none;
	border:1px solid #D0D0D0;
	border-radius:4px;
}
.edict-nickname .edict input[type="button"]{
	height:3rem;
	border-radius:5px;
	background: #34BE7B;
	margin:1rem 2%;
	display: block;
	width:96%;
	border:none;
	color:#fff;
	font-size: 1.2rem;
}
.edict-nickname .edict .erro{
	margin-top:.5rem;
	color:#f00;
	font-size:1rem;
	display: block;
	margin-right:.8rem;
	
}
.edictbg { 
	background-color: rgba(0, 0, 0, 0.3); 
	bottom: 0; 
	height: 100%; 
	left: 0; 
	opacity: 1; 
	position: fixed; 
	right: 0; 
	top: 0; 
	width: 100%; 
	z-index: 1100; 
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
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
.slideBtom-enter-active, .slideBtom-leave-active{
	 transition: all .5s ease-out;
}
.slideBtom-enter, .slideBtom-leave-active{
	transform: translateY(100%);
}	
</style>