<template>
	<section class="expertTop">
    	<form>
    		<input type="text" class="verM" placeholder="搜索话题、专家姓名" />
    		<input type="button" class="verM" value="" />
    	</form>
	</section>
</template>
<script>
export default {
	data() {
		return {
			
		}
	}
}
</script>
<style scoped>
.expertTop input[type="text"]{
	height:2.5rem;
	border:1px solid #36BD7B;
	box-shadow: 0 0 5px #36BD7B;
	border-radius:10px 0 0 10px;
	width:77.5%;
	padding-left:2%;
	background: #EEF9F3;
	color:#CACECD;
	margin-right:.5%;
	font-size:1rem;
}
.expertTop input[type="button"]{
	border:none;
	height:2.5rem;
	width:20%;
	background:url('../../../static/img/search.png') no-repeat center center;
	background-size: 100% 100%;
}
</style>