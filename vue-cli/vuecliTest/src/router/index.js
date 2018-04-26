import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path : '/Hi',
    	component : Hi,
    	children:[
    		{
    			path : '/',
                name : 'Hello/Hi',
    			component : Hi
    		},
    		{
    			path : 'hi1',
                name : 'hi1',
    			component : Hi1
    		},
    		{
    			path : 'hi2',
                name : 'hi2',
    			component : Hi2
    		}
    	]
    }
  ]
})

//一个坑 子路由中的path不需要'/'
//第二个坑 只要有路由有子路由的,不需要写name,只需要在子路由中写name
