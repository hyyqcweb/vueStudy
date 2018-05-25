<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span> <!-- brand icon -->
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports"> <!-- 当seller.supports === true  -->
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <!-- 两个span为什么写在同行呢: 因为让他们的间隙消失,减少bug和布局 -->
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background"> <!-- 背景的模糊效果特意加的一层 -->
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="title">{{seller.name}}</h1>
            <div class="star-wrapper">
               <star :size="48" :score="seller.score"></star>
            </div>
            <div class="content-title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index) in seller.supports" :key="item.id">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="content-title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <p v-if="seller.supports" class="placard">{{seller.bulletin}}</p>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
    </div>
  </div>
</template>
<script>
import star from '../star/star';
  export default {
    components: {
      star
    },
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail () {
        this.detailShow = true;
      },
      hideDetail () {
        this.detailShow = false;
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl";
  .header
    position: relative
    color: #fff
    overflow: hidden
    background: rgba(7,17,27,0.5)
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0 // 消除头像和字体之间的间隙
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('./images/brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            vertical-align: top
            &.decrease // 减
              bg-image('./images/decrease_1')
            &.discount // 折
              bg-image('./images/discount_1')
            &.guarantee // 保
              bg-image('./images/guarantee_1')
            &.invoice // 发
              bg-image('./images/invoice_1')
            &.special // 特
              bg-image('./images/special_1')
          .text
            line-height: 12px
            font-size: 10px
      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background: rgba(0, 0, 0, 0.2)
        text-align: center
        cursor: pointer
        .count
          font-size: 10px
          vertical-align: top
        .icon-keyboard_arrow_right
          margin-left: 2px
          line-height: 24px
          font-size: 10px
    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 26px
      padding: 0 12px
      white-space: nowrap // 以下三行文字省略
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, 0.2)
      .bulletin-title
        display: inline-block
        margin-top: 7px
        width: 22px
        height: 12px
        bg-image('./images/bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        line-height: 28px
        margin: 0 4px
        font-size: 10px
        vertical-align: top
      .icon-keyboard_arrow_right
        position: absolute
        right: 12px
        top: 10px
        font-size: 10px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)  // 模糊效果
    .detail
      position: fixed
      top: 0
      left: 0
      z-index: 100
      width: 100%
      height: 100%
      overflow: auto
      transition: all .5s
      background: rgba(7, 17, 27, 0.8)
      -webkit-backdrop-filter: blur(10px) // IOS支持的特性
      .detail-wrapper
        min-height: 100%
        width:100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          .title
            line-height: 16px
            text-align: center
            font-weight: 700
            font-size: 16px
          .star-wrapper
            margin: 16px 0 28px 0
            text-align: center
          .content-title
            display: flex
            width: 80%
            margin: 0 auto 24px
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255,255,255,.2)
            .text
              padding: 0 12px
              font-size: 14px
              font-weight: 700
          .supports
            width: 80%
            margin: 0 auto
            padding-bottom: 28px
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                background-repeat: no-repeat
                background-size: 16px 16px
                margin-right: 6px
                &.decrease // 减
                  bg-image('./images/decrease_2')
                &.discount // 折
                  bg-image('./images/discount_2')
                &.guarantee // 保
                  bg-image('./images/guarantee_2')
                &.invoice // 发
                  bg-image('./images/invoice_2')
                &.special // 特
                  bg-image('./images/special_2')
              .text
                font-size: 12px
                line-height: 16px
            &:last-child
              margin-bottom: 0
          .placard
            width: 74%
            margin: 0 auto
            font-size: 12px
            text-align: justify
            line-height: 24px
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto
        clear: both
        cursor: pointer
        font-size: 32px
</style>
