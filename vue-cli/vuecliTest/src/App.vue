<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">Hi</router-link>|
      <!-- <router-link to="/hi/hi1">Hi1</router-link>| -->
      <router-link :to="{name:'hi1',params:{username : 'hyyqc',id:'888'}}">
        Hi1
      </router-link>|
      <router-link to="/hi/hi2">Hi2</router-link>
    </div>
    <p>{{$route.name}}</p>    
    <!-- $route.name 拿到路由中的name -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- 
  通过绑定的形式传参
  <router-link :to="{name : '/hi/hi1',params:{username : 'hyyqc',id:'888'}}">Hi1</router-link>|
  name一定要和router.js中的那一个name一样,
  所指定页接收的参数是{{$route.params.username}}-{{$route.params.id}}
-->
