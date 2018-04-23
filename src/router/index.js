import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/index/main'

const login = resolve => require(['@/components/login/login'], resolve)
const home = resolve => require(['@/components/home/home'], resolve)
const wisdom = resolve => require(['@/components/wisdom/wisdom'], resolve)
const Healthy = resolve => require(['@/components/healthHeart/healHeart'], resolve)
const expert = resolve => require(['@/components/expert/expert'], resolve)
const expertdes = resolve => require(['@/components/expert/experdes'], resolve)
const my = resolve => require(['@/components/my/my'], resolve)
const personcenter = resolve => require(['@/components/my/child/personcenter'], resolve)
const healtyDetail = resolve => require(['@/components/healthHeart/child/child/healtyDetail'], resolve)
const Coup = resolve => require(['@/components/Coup/Coup'], resolve)

Vue.use(Router)

export default new Router({
  //mode:'history',
  routes: [
  	/*{
  		path:'/',
  		component: login
  	},
  	{
  		path:'/home',
  		component: home
  	},*/
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
    	path:'/wisdom',
    	name:'wisdom',
    	component:wisdom
    },
    {
    	path:'/Healthy',
    	name:'Healthy',
    	component:Healthy,
    	children: [
    		{
    			path:'healtyDetail',
    			name:'healtyDetail',
    			component:healtyDetail
    		}
    	]
    },
    {
    	path:'/expert',
    	name:'expert',
    	component:expert,
    	children: [
    		{
    			path:'expertdes',
    			name:'expertdes',
    			component:expertdes
    		}
    	]
    },
    {
    	path:'/Coup',
    	name:'Coup',
    	component:Coup,
    	children: [
    		{
    			path:'coupDescript',
    			component:healtyDetail
    		}
    	]
    },
    {
    	path:'/my',
    	name:'my',
    	component:my,
    	children: [
    		{
    			path: 'personcenter',
    			name:'personcenter',
    			component:personcenter
    		}
    	]
    },
    {
    	path:'*',
    	redirect:'/main'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})
