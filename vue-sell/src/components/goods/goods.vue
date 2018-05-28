<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" :key="item.id" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="food-list" :key="item.id">
          <h1>{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item" :key="food.id">
              <div class="icon">
                <img :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}}</h2>
                <p class="description">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span>¥{{food.price}}</span>
                  <span v-show="food.oldPrice">{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const ERR_OK = 0;

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: []
    };
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    axios.get('/api/goods')
      .then(res => {
        res = res.data;
        // console.log(res);
        if (res.errno === ERR_OK) {
          this.goods = res.data;
          // console.log(res.data);
        }
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl";
  .goods
    display: flex
    position: absolute
    width: 100%
    top: 174px
    bottom: 46px
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px // 如果不写width,在安卓浏览器下有兼容性问题
      background: #f3f5f7
      .menu-item
        display: table
        width: 56px
        height: 54px
        line-height: 14px
        padding: 0 12px // (80-56) / 2
        .text
          display:table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
          border-1px(rgba(7,17,27,0.1))
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 2px
            background-size: 12px 12px
            background-repeat: no-repeat
            vertical-align: top
            &.decrease // 减
              bg-image('./images/decrease_3')
            &.discount // 折
              bg-image('./images/discount_3')
            &.guarantee // 保
              bg-image('./images/guarantee_3')
            &.invoice // 发
              bg-image('./images/invoice_3')
            &.special // 特
              bg-image('./images/special_3')
    .foods-wrapper
      flex: 1
</style>
