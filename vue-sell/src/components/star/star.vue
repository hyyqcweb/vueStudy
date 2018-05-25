<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"
          :key="itemClass.id"></span>
  </div>
</template>

<script>
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: { // 计算属性
      starType () {
        return 'star-' + this.size;
      },
      itemClasses () {
        let result = [];
        let score = Math.floor(this.score * 2) / 2; // 向下取整
        let hasDecimal = score % 1 !== 0; // 是否有小数,Math.floor(this.score * 2)>xx.5的时候,就是有小数,然后hasDecimal为true
        console.log(4 % 1 !== 0);
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        if (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/mixin.styl';
    .star
      font-size: 0
      .star-item
        display: inline-block
        background-repeat: no-repeat
      &.star-48
        .star-item
          width: 20px
          height: 20px
          margin-right: 22px
          background-size: 20px 20px
          &:last-child
            margin-right: 0
          &.on
            bg-image('./images/star48_on')
          &.half
            bg-image('./images/star48_half')
          &.off
            bg-image('./images/star48_off')
      &.star-36
        .star-item
          width: 15px
          height: 15px
          margin-right: 16px
          background-size: 15px 15px
          &:last-child
            margin-right: 0
          &.on
            bg-image('./images/star36_on')
          &.half
            bg-image('./images/star36_half')
          &.off
            bg-image('./images/star36_off')
      &.star-24
        .star-item
          width: 10px
          height: 10px
          margin-right: 3px
          background-size: 10px 10px
          &:last-child
            margin-right: 0
          &.on
            bg-image('./images/star24_on')
          &.half
            bg-image('./images/star24_half')
          &.off
            bg-image('./images/star24_off')
</style>
