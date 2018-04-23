<template>
  <div class="main">
  	<swipe></swipe>
  	<sortnav></sortnav>
  	<section class="wisdom">
	  	<wisdomList>
	  		<div class="Witty-top p15 clear" slot="title">
	    		<p class="fl">智趣测</p>
	    		<router-link class="fr" to="/wisdom">更多></router-link>
	    	</div>
	  	</wisdomList>
  	</section>
  	<foot></foot>
  </div>
</template>

<script>
import foot from '../common/footer'
import swipe from './swiper'
import wisdomList from '../wisdom/wisdomList'
import sortnav from './sortnav'
export default {
  name: 'main',
  data () {
    return {
    }
  },
  components: {
    foot,
    swipe,
    wisdomList,
    sortnav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wisdom{
	padding-bottom:5.5rem;
}
.Witty-top{
	height:3.5rem;
	line-height:3.5rem;
	border-bottom:1px solid #EEEEEE;
	color:#666;
	font-size:1.2rem;
}
</style>
