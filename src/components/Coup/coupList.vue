<template>
	<section>
		<section class="list">
			<ul>
				<router-link tag="li" :to="{ path:'/Coup/coupDescript', query:{id: item.id} }" v-for="(item, index) in couparr" :key='index'>
					<h1>{{ item.title }}</h1>
					<p class="descript">{{ item.descript }}</p>
					<p class="looknum">
						<span>{{ item.looknum }}</span>次浏览
					</p>
				</router-link>
			</ul>
		</section>
	</section>
</template>
<script>
export default {
	data() {
		return {
			coupList:'',
			couparr:[]
		}
	},
	props: ['filtertype'],
	created() {
		this.$http.get('/api/couplist').then((response) => {
			response = response.body;
			const ERR_OK = 0;
			if(response.errno == ERR_OK){
				this.coupList = response.data;
				this.filter(this.filtertype)
			}
		})
	},
	mounted() {
		//console.log(this.couparr)
	},
	watch: {
		filtertype: function(val, oldVal) {
			//this.filter(val)
			this.$http.get('/api/couplist').then((response) => {
			response = response.body;
			const ERR_OK = 0;
			if(response.errno == ERR_OK){
				this.coupList = response.data;
				this.filter(this.filtertype)
			}
		})
		}
	},
	methods: {
		filter(value) {
			this.couparr = [];
			if(value == 'all'){
				this.couparr = this.coupList;
			}else{
				for(let list of this.coupList){
					if(list.type == value){
						this.couparr.push(list);
					}
				}
			}
		}
	}
}
</script>
<style scoped>

.list {
	background: #fff;
	margin-top:1rem;
	margin-bottom:3.5rem;
}
.list li {
	padding:1rem;
	border-bottom:1px solid #ddd;
}
.list li h1 {
	font-size:1.2rem;
	color:#333;
	margin-bottom:.5rem;
}
.list li .descript,.list li .looknum {
	color:#999;
}
.list li .descript{
	line-height: 1.8rem;
	margin-bottom:.5rem;
}
</style>