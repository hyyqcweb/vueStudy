<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
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
import axios from 'axios';

const ERR_OK = 0; // 定义常量errno

export default {
  components: {
    'v-header': header // header为HTML5元素,所以要赋值
  },
  name: 'App',
  data () {
    return {
      seller: {}
    };
  },
  created () {
    axios.get('/api/seller')
      .then((res) => {
        // console.log(res);
        // console.log(res.data.data.avatar);
        if (res.data.errno === ERR_OK) {
            this.seller = res.data.data;
        }
      }, (error) => {
        console.log(error);
      });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/css/mixin.styl";
  .tab
    display: flex
    width: 100%
    height: 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      line-height: 40px
      & > .nav
        display: block
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
