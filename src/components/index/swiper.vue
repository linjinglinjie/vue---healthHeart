<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../static/img/banner_01.png"></div>
            <div class="swiper-slide"><img src="../../../static/img/jianxinbj_02.jpg"></div>
            <div class="swiper-slide"><img src="../../../static/img/banner_03.png"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>
<script>
import '../../../static/js/plug/swiper.min.js'
import '../../../static/style/plug/swiper.min.css';
export default {
  data () {
    return {
    	
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
  }
}
</script>
<style scoped>
	.swiper-container {
        width: 100%;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-slide img{
    	width:100%;
    	height:100%;
    }
</style>