<template>
	<div>
		<h2>{{msg}}</h2>
		<hr>
		<!-- {{$store.state.count}} = {{count}} -->
		<h3>{{count}}</h3>
		<!-- <p><button @click="$store.commit('add',10)">add</button></p>
		<p><button @click="$store.commit('reduce')">reduce</button></p> -->
		<p><button @click="add(10)">add</button></p>
		<p><button @click="reduce(5)">reduce</button></p>
	</div>
</template>
<script>
	import store from '@/vuex/store';
	import {mapState,mapMutations,mapGetters} from 'vuex'; // 第二种第三种方法用到 
	// mapState 更改状态  mapMutations 更改上面定义的click
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
		// computed:mapState(['count']),
		computed:{  
			...mapState(['count']),
			...mapGetters(['count'])   // 当有两种的时候就是这样写
		}
		methods:mapMutations(['add','reduce']),
		store
	}
	/*
		把$store.state.count 变成 count 有三种方法
		1. 直接在模板中的计算属性里面写
		2. 引用mapState,然后在计算属性里面写,以对象的方法
		3. 引用mapState,然后在计算属性里面写,以数组的方式
	*/
</script>
