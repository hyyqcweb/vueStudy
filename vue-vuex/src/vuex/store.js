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
export default new Vuex.Store({
	state,
	mutations,
	getters
})