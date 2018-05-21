<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link class="nav" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="nav" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="nav" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header';

export default {
  components: {
    'v-header': header // header为HTML5元素,所以要赋值
  },
  name: 'App'
};
</script>

<style lang="less">
  @import "./common/css/mixin";
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    /*border-1px(rgba(7,17,27,0.1))*/ // fixme 由于语法检测报错,导致手机端的适配1px出错,有空改正
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      line-height: 40px;
      & > .nav {
        display: block;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>
