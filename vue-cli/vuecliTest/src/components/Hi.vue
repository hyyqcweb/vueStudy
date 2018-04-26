<template>
	<div class="hi">
		<h1>{{msg}}</h1>
		<router-view/>
	</div>
</template>
<script>
	export default {
		name : 'Hi',
			data(){
				return {
					msg : '我是Hi页面'
				}
			}
	}
</script>
<style scoped>
	
</style>