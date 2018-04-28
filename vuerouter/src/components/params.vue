<template>
	<div>
		<h2>{{msg}}</h2>
		<p>新闻ID:{{ $route.params.newsId }}</p>
		<p>新闻内容:{{ $route.params.newsTilte }}</p>
	</div>
</template>
<script>
	export default{
		name : 'params',
		data(){
			return {
				msg : 'params'
			}
		},
		beforeRouteEnter:(to,from,next) => {
			console.log('我进入了params模板');
			next();
		},
		beforeRouteLeave:(to,from,next) => {
			console.log('我离开了params模板');
			next();
		}
	}
</script>