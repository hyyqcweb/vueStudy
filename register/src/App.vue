<template>
  <div id="app">
    <sider></sider>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import sider from '@/components/common/sider'
export default {
  name: 'App',
  components:{
    sider
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main{
    float: left;
    width: 95%;
    background-color: #EFF2F7;
    height: 100%;
    overflow: hidden;
  }
}

</style>
