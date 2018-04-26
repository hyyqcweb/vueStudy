<template>
	<div class="hi">
		<h1>{{msg}}-{{$route.params.username}}-{{$route.params.id}}</h1>
	</div>
</template>
<script>
	export default {
		name : 'Hi1',
			data(){
				return {
					msg : '我是Hi1页面'
				}
			}
	}
</script>
<style scoped>
	
</style>