<template>
  <div class="pos">
  	<el-row>
  		<el-col :span='7' class="pos-order" id="order-list">
  			我是首页
  		</el-col>
  		<el-col>
  			我是产品栏
  		</el-col>
  	</el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  // mounted(){
  //    利用js强行把高度变为100%,下面vh单位和js类似,但是兼容性不好
  // 	let orderHeight = document.body.clientHeight;
  // 	document.getElementById('order-list').style.height = orderHeight + 'px'; 
  // }
}
</script>

<style lang="less" scoped>
	.pos-order{
		background-color: #F9FAFC;
		border-right: 1px solid #C0CCDA;
		height: 100vh;
	}
</style>
