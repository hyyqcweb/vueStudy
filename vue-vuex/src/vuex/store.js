import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state ={
	count : 1
}
const mutations = {
	// 需求:不想+1,要传值进行加
	add(state,n){
		state.count += n;
	},
	reduce(state,n){
		state.count -= n;
	}
}
const getters = {
	// getters 过滤属性 每次加100
	count :state=>state.count += 100
}
const actions = {
	addAction(context){
		context.commit('add',10);
		setTimeout(()=>{
			context.commit('reduce',1)
		},3000)
		console.log('我比reduce先执行')
	},
	reduceAction({commit}){
		commit('reduce',5)
	}
}
// 当项目开发人员非常多的时候适用module,模块化开发
const moduleA = {
	state,
	mutations,
	getters,
	actions
}
export default new Vuex.Store({
	modules : {a : moduleA}
})