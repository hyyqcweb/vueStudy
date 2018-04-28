import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history', 
  // 默认是hash 也就是url是这样的 http://localhost:8080/#/
  // history url是这样的 http://localhost:8080/ 
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      components : {
      	default : HelloWorld,
    		left : Hi1,
    		right : Hi2      	
      },
      alias : '/jjj'
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
    	component : params,
      // beforeEnter:(to,from,next) => {
      //   console.log('我进入了params模板');
      //   console.log(to);
      //   console.log(from);
      //   next() // 相当于一个开关,next显示开,不写显示关
      // },
    },
    {
      path: '/goHome',
      redirect : '/'   // redirect 重定向
    },
    {
      path : '/goParams/:newsId(\\d+)/:newsTilte',
      redirect : '/params/:newsId(\\d+)/:newsTilte'
    },
    {
      path : '/Hi1',
      component : Hi1,
      alias : '/hyyqc'  // alias 别名 作用在下面讲解
    },
    {
      path : '*',
      component : Error
    }
    
  ]
})

// 这里有个坑,如果引用多个router-view,这里的component 要变成components 是多了一个s的

// alias 和 redirect 的区别   别名  重定向
// redirect 重定向 会直接改变url地址,把url地址变成了真实的path地址
// alias 别名 不会直接改变url地址,会让用户知道自己所访问的地址,但是改变了<router-view/>的内容

// 这里有个坑,alias不能用在path:'/'下,这样的别名是不起作用的(现在可以用,这个坑去除)


// 路由的钩子函数 可以分为直接在路由里面写的,或者在模板中写的,两者选其一