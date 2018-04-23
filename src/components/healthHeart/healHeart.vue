<template>
	<div>
		<lhead></lhead>
		<section class="Good-health">
			<div class="health-top" >
              <router-link class="por" :to="{ path:'/Healthy/healtyDetail', query:{Healthyid: healtySticky.id} }">
                  <img :src="'/static/img/' + healtySticky.img" />
                  <div class="poa p15">
                      <p class="fl">{{healtySticky.title}}</p>
                      <p class="fr">
                          <i class="icon iconfont" v-if="healtySticky.type=='video'">&#xe624;</i>
                          <i class="icon iconfont" v-if="healtySticky.type=='audio'">&#xe602;</i>
                      </p>
                  </div>
              </router-link>
              <div class="health-dis">
                  {{healtySticky.descript}}
              </div>
          </div>
		</section>
		<healthList></healthList>
		<foot></foot>
		<transition name="slide">
			<router-view :goBack="goBack" :headTitle="headTitle" :type="type"></router-view>
		</transition>
	</div>
</template>
<script>
	import lhead from './child/head'
	import foot from '../common/footer'
	import healthList from './child/healthList'
	export default{
		name:'Healthy',
		data () {
			return {
				healtySticky:'',
				goBack: true,
				headTitle: '健心吧',
				type:'healtydes'
			}
		},
		created() {
			this.$http.get('/api/healthList').then((response) => {
				response = response.body;
				const ERR_OK = 0;
				if(response.errno == ERR_OK){
					for(let item of response.data){
						if(item.Sticky == 'true'){
							this.healtySticky = item;
						}
					}
				}
			})
		},
		components: {
			lhead,
			foot,
			healthList
		}
	}
</script>
<style scoped>
.Good-health{
	margin-top:.5rem;
}
.Good-health .health-top a.por{
	display:block;
	height:14rem;
	overflow: hidden;
}
.Good-health .health-top a.por img{
	width:100%;
	height: 100%;
}
.Good-health .health-top a.por >.poa{
	bottom:0;
	left:0;
	right:0;
	height:2rem;
	line-height:2rem;
	background: rgba(255,255,255,.3);
}
.Good-health .health-top a.por >.poa p.fl{
	color:#fff;
	font-size:1.2rem;
	width:75%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow:ellipsis;
}
.Good-health .health-top a.por >.poa p.fr .icon{
	font-size: 2rem;
	color:#fff;
}
.health-dis{
	background: #fff;
	font-size:1rem;
	color:#999;
	line-height:1.5rem;
	border-bottom:1px solid #bababa;
	padding:.6rem 15px;
}
.slide-enter-active, .slide-leave-active{
	transition: all .4s;
}
.slide-enter, .slide-leave-active{
	transform: translateX(100%);
	opacity:0;
}
</style>