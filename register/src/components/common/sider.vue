<template>
	<div class="left-nav">
		<ul>
			<li>
				<i class="icon iconfont icon-31shouye"></i>
				<div>首页</div>
			</li>
			<li>
				<i class="icon iconfont icon-31dianpu"></i>
				<div>店铺</div>
			</li>
			<li>
				<i class="icon iconfont icon-31quanbushangpin"></i>
				<div>商品</div>
			</li>
			<li>
				<i class="icon iconfont icon-31huiyuanqia"></i>
				<div>会员</div>
			</li>
			<li>
				<i class="icon iconfont icon-31paixingbang"></i>
				<div>统计</div>
			</li>

		</ul>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="less">
	.iconfont{
		font-size: 24px;
	}
	.left-nav{
		color:#fff;
		font-size:10px;
		height: 100%;
		background-color: #1D8CE0;
		float: left;
		width: 5%;
		ul{
			padding: 0;
			margin: 0;
			li{
				list-style: none;
				text-align: center;
				border-bottom: 1px solid #20a0ff;
				padding: 10px;
				cursor:pointer;
			}
		}
	}
</style>