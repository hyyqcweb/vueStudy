<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade" mode="out-in"> 
      <!-- mode 有两种模式 in-out out-in -->
      <router-view/>
      <router-view name="left" style="width: 50%;float: left;height: auto;background: red;"/>
      <router-view name="right" style="width: 50%;float: left;height: auto;background: green;"/>
    </transition>
    <br>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/website">params</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/666/hyyqc">goParams</router-link>
    <router-link to="/hyyqc">hyyqc alias</router-link>
    <router-link to="/jjj">不起作用的别名(vue版本更新,现在可以了)</router-link>
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
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s
}
</style>
