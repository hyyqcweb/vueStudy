<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-view name="left" style="width: 50%;float: left;height: auto;background: red;"/>
    <router-view name="right" style="width: 50%;float: left;height: auto;background: green;"/>
    <br>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/website">params</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/666/hyyqc">goParams</router-link>
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
