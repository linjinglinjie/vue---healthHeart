<template>
	<section>
		<div class="healthList">
              <ul class="clear">
                  <router-link tag="li" :to="{ path:'/Healthy/healtyDetail', query:{id: item.id} }" class="fl por" v-for="(item, index) in healtyList" :key="index">
                      <img :src="'/static/img/' + item.img" />
                      <div class="poa">
                          <p class="fl">{{item.title}}</p>
                          <p class="fr">
                              <i class="icon iconfont" v-if="item.type=='video'">&#xe624;</i>
                              <i class="icon iconfont" v-if="item.type=='audio'">&#xe602;</i>
                          </p>
                      </div>
                  </router-link>
              </ul>
          </div>
	</section>
</template>
<script>
	export default {
		data () {
			return {
				healtyList: ''
			}
		},
		created() {
			this.$http.get('/api/healthList').then((response) => {
				response = response.body;
				const ERR_OK = 0;
				if(response.errno == ERR_OK){
					this.healtyList = response.data;
				}
			})
		}
	}
</script>
<style scoped>
	.healthList{
	margin-top:.8rem;
}
.healthList  ul li{
	width:45.5%;
	height:7rem;
	margin-left:3%;
	margin-bottom:.8rem;
	box-shadow: 0 0 7px #bababc;
}
.healthList  ul li>img{
	width:100%;
	height:100%;
}
.healthList  ul li .poa{
	bottom:0;
	left:0;
	right:0;
	height:1.5rem;
	line-height:1.5rem;
	padding:0 .3rem;
	background: rgba(0,0,0,.3);
	color:#fff;
	font-size:1rem;
}
.healthList  ul li .poa .fl{
	width:75%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow:ellipsis;
}
.healthList  ul li .poa .fr .icon{
	font-size: 1.5rem;
}
</style>