<template>
	<div class="edict-job">
		<ul class="edict-job-list">
			<li v-for="(item, index) in edictclass" :key="index" @click="changename(item.name)"><a>{{item.name}}</a></li>
		</ul>
		<div class="edict-job-footer">
		<button class="edict-job-btn" @click="close">取消</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
		}
	},
	props: ['edictclass'],
	methods: {
		changename(value){
			this.$emit('changename', value);
		},
		close(){
			this.$emit('edictshow');
		}
	}
}
</script>
<style scoped>
/*修改职业*/
.edict-job { 
	font-size: 14px; 
	border-radius: 0;
	bottom: 0; 
	left: 0; 
	position: fixed; 
	text-align: center; 
	-webkit-transition: -webkit-transform 300ms; 
	transition: transform 300ms ; 
	width: 100%; 
	z-index: 1110; 
}
.edict-job-footer { 
	margin: 10px; 
}
.edict-job-footer .edict-job-btn { 
	color: #0078FF; 
	display: block; 
	width: 100%; 
	height: 3.5rem;
	line-height:3.5rem; 
	background-color:#F9F9F9; 
	border:none;
	border-radius: 10px; 
	font-size: 1.3rem; 
	font-weight: 400; 
	text-align: center; 
	font-family: 'Microsoft YaHei';
}
.edict-job-list { 
	background-color:#F9F9F9; 
	border-radius:10px;
	margin: 0 .8rem; 
	zoom:1; 
	overflow:auto; 
}
.edict-job-list li { 
	height: 3.5rem;
	line-height:3.5rem; 
	border-bottom:1px solid #DAD9DE; 
}
.edict-job-list a { 
	color: #0078FF; 
	display: block; 
	font-size: 1.3rem; 
}
</style>