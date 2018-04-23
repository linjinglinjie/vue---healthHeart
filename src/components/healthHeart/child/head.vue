<template>
	<div class="listNav">
        <ul class="flex">
            <li class="Graphic-test algin-center">
                <div class="navBord"></div>
                <a href="">
                    <img src="../../../../static/img/Graphic.jpg"  />
                    <p>催眠冥想</p>
                </a>
            </li>
            <li class="character algin-center">
                <div class="navBord"></div>
                <a href="">
                    <img src="../../../../static/img/character.jpg"  />
                    <p>性格倾向</p>
                </a>
            </li>
            <li class="Workplace algin-center">
                <div class="navBord"></div>
                <a href="">
                    <img src="../../../../static/img/Workplace.jpg"  />
                   <p>职场人际</p>
                </a>
            </li>
            <li class="Love-family algin-center">
                <div class="navBord"></div>
             <a href="">
                 <img src="../../../../static/img/Love-family.jpg"  />
                <p>婚恋家庭</p>
             </a>
            </li>
            <li class="Mental-health algin-center">
                <div class="navBord"></div>
                <a href="">
                    <img src="../../../../static/img/Mental-health.jpg"  />
                    <p>心理健康</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
	export default{
		name:'head',
		data () {
			return {
				
			}
		}
	}
</script>
<style scoped>
.listNav{
	border-bottom:1px solid #d0d0d0;
	background: #fff;
}
.listNav li{
	width:20%;
}
.listNav li a{
	display: block;
	border-right:1px solid #eee;
}
.listNav li img{
	height:2rem;
	margin-top:.5rem;
}
.listNav li p{
	font-size:1.1rem;
	color:#373737;
	margin-bottom:.5rem;
}
.listNav li .navBord{
	height:.7rem;
}
.listNav .Graphic-test .navBord{
	background: #f1d8ff;
}
.listNav .character .navBord{
	background: #e0f7e7;
}
.listNav .Workplace .navBord{
	background: #e2e6ff;
}
.listNav .Love-family .navBord{
	background:  #fff2e2;
}
.listNav .Mental-health .navBord{
	background: #ffe8e2;
}
</style>