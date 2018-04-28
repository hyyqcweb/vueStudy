<template>
	<div>
		<h2>{{msg}}</h2>
		<hr>
		<h3>{{$store.state.count}}</h3>
		<p><button @click="$store.commit('add')">add</button></p>
		<p><button @click="$store.commit('reduce')">reduce</button></p>
	</div>
</template>
<script>
	import store from '@/vuex/store';
	export default {
		data(){
			return {
				msg : 'Hello Vuex'
			}
		},
		store
	}
</script>