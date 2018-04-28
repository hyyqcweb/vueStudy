<template>
	<div>
		<h2>{{msg}}</h2>
		<hr>
		<h3>{{$store.state.count}} - {{count}}</h3>
		<p><button @click="$store.commit('add')">add</button></p>
		<p><button @click="$store.commit('reduce')">reduce</button></p>
	</div>
</template>
<script>
	import store from '@/vuex/store';
	import {mapState} from 'vuex'; // 第二种第三种方法用到
	export default {

		data(){
			return {
				msg : 'Hello Vuex'
			}
		},
		// 第一种
		// computed:{  
		// 	count(){
		// 		return this.$store.state.count;
		// 	}
		// },
		// 第二种
		// computed:mapState({ // 是一个对象,所以要用()包起来
		// 	count:state => state.count
		// }),
		// 第三种
		computed:mapState(['count']),
		store
	}
	/*
		把$store.state.count 变成 count 有三种方法
		1. 直接在模板中的计算属性里面写
		2. 引用mapState,然后在计算属性里面写,以对象的方法
		3. 引用mapState,然后在计算属性里面写,以数组的方式
	*/
</script>
