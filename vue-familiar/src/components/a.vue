<template>
	<div>
		{{hello}}
		<p>{{ $route.params.color }}</p>
		<button @click="getParam">get param</button>
	</div>
</template>
<script>
	export default {
		name:'componentA',
		data(){
			return {
				hello : 'I am component A'
			}
		},
		methods:{
			getParam(){
				console.log(this.$route.params)
			}
		}
	}
</script>