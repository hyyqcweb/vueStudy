<template>
	<div>
		<div class="app-header">
			<div class="app-header-inner">
				<img src="../assets/logo.png" alt="logo">
				<div class="header-nav">
					<ul class="nav-list">
						<li>登录</li>
						<li class="nav-pile">|</li>
						<li>注册</li>
						<li class="nav-pile">|</li>
						<li>关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="app-content">content</div>
		<div class="app-footer">
			<p>&copy; 2018 hyyqc MIT</p>
		</div>		
	</div>
</template>
<script>
	
</script>
<style>
	body {
	  background: #f0f2f5;
	  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
	  font-size: 14px;
	  color: #444;
	}
	.app-header {
	  background: #363636;
	  color: #b2b2b2;
	  height: 90px;
	  line-height: 90px;
	  width: 100%;
	}
	.app-header-inner {
	  width: 1200px;
	  margin: 0 auto;
	}
	.header-logo {
	  float: left;
	}
	.app-header-inner img {
	  width: 50px;
	  margin-top: 20px;
	}
	.header-nav {
	  float: right;
	}
	.header-nav ul {
	  overflow: hidden;
	}
	.header-nav li {
	  cursor: pointer;
	  float: left;
	}
	.nav-pile {
	  padding: 0 10px;
	}
	.app-footer {
	  text-align: center;
	  height: 80px;
	  width: 100%;
	  line-height: 80px;
	  background: #e3e4e8;
	  clear: both;
	  margin-top: 30px;
	}
	.container {
	  width: 1200px;
	  margin: 0 auto;
	}
	.hr {
	  height: 1px;
	  width: 100%;
	  background: #ddd;
	}
	.button {
	  background: #4fc08d;
	  color: #fff;
	  display: inline-block;
	  padding: 10px 20px;
	  cursor: pointer;
	}
	.button:hover {
	  background: #4fc08d;
	}
	.g-form {

	}
	.g-form-line {
	  padding: 15px 0;
	}
	.g-form-label {
	  width: 100px;
	  font-size: 16px;
	  display: inline-block;
	}
	.g-form-input {
	  display: inline-block;
	}
	.g-form-input input {
	  height: 30px;
	  width: 200px;
	  line-height: 30px;
	  vertical-align: middle;
	  padding: 0 10px;
	  border: 1px solid #ccc;
	}
	.g-form-btn {
	  padding-left: 100px;
	}
	.g-form-error {
	  color: red;
	  padding-left: 15px;
	}
</style>