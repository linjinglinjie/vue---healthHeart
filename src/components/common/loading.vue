<template>
	<div class="load-container load1">
      <div class="loader">Loading...</div>
    </div>
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
.load-container{
	width:100%;
	position:fixed;
	top:0;
	left:0;
	bottom:0;
	z-index: 9999;
	background: rgba(0,0,0,.3);
}
.load1 .loader,
.load1 .loader:before,
.load1 .loader:after {
  background: #32BD7A;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.load1 .loader:before,
.load1 .loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.load1 .loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.load1 .loader {
  text-indent: -9999em;
  margin: 0 auto;
  position: relative;
  top:50%;
  margin-top:-2rem;
  font-size: 11px;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.load1 .loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0 #32BD7A;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em #32BD7A;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0 #32BD7A;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em #32BD7A;
    height: 5em;
  }
}	
</style>