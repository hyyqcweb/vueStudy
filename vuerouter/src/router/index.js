import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      components : {
      	default : HelloWorld,
		left : Hi1,
		right : Hi2      	
      }
    },
    {
      path: '/hyyqc',
      name: 'HelloWorld',
      // 这里是为了我们输入路由地址的时候,底下的left,right两块里面的内容互换
      components : {
      	default : HelloWorld,
    		left : Hi2,
    		right : Hi1      	
      }
    },
    // 通过url传递参数
    {
    	path: '/params/:newsId(\\d+)/:newsTilte', // 正则(\\d+) 输入必须为数字 当那边传过来的不是数字,则页面不会显示
    	component : params
    },
    {
      path: '/goHome',
      redirect : '/'   // redirect 重定向
    },
    {
      path : '/goParams/:newsId(\\d+)/:newsTilte',
      redirect : '/params/:newsId(\\d+)/:newsTilte'
    }
  ]
})

// 这里有个坑,如果引用多个router-view,这里的component 要变成components 是多了一个s的
