<template>
  <div>
  	<comhead :headTitle="headTitle" :goBack="goBack"></comhead>
  	<wisdomList class="wisdom"></wisdomList>
  </div>
</template>

<script>
	import comhead from '../common/head'
	import wisdomList from './wisdomList'
	export default{
		name:'wisdom',
		data() {
			return {
				headTitle: '智趣测试',
			  goBack: true
			}
		},
		created() {
			this.$http.get('/api/wisdom').then((response) => {
				response = response.body;
				const ERR_OK = 0;
	      if (response.errno === ERR_OK) {
	        this.wisdom = response.data;
	      }
			})
		},
		components: {
			comhead,
			wisdomList
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wisdom{
	padding-top:4rem;
}
</style>
