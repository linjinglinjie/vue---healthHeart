<template>
	<section>
		<div class="Avatar algin-center">
			<slot name="back"></slot>
			<img :src="'/static/img/' + avatar"/>
			<p class="name">{{expertName}}</p>
		</div>
		<slot name="person"></slot>
	</section>
</template>
<script>
export default {
	data() {
		return {
		}
	},
	props: ['avatar','expertName']
}
</script>
<style scoped>
.Avatar{
	background: #45C285;
	padding:2rem 0 1.5rem 0;
}
.Avatar img{
	border-radius:50%;
	box-shadow: 0 0 5px #31A36C;
	margin-bottom:.5rem;
	width:5rem;
}
.Avatar .name{
	color:#fff;
	font-size:1.3rem;
}
</style>