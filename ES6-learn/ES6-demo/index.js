// 第五节: 字符串拼接 `` 

//let jjj = "幻夜";
//let blog = `都是的发送到发送到${jjj}`; //里面也支持html标签
//document.write(blog); 
// indexOf 找索引  blog.indexOf(jjj)
// includes 不返回索引 返回 true or false  blog.includes(jjj)
// 判断开头是否存在  blog.startsWith(jjj)
// 判断结尾是否存在  blog.endsWith(jjj)
// 复制字符串        document.wirte('jjj | ',repeat(3))
// document.write('jjj | '.repeat(3))

// 第六节: ES6数字操作 

// 声明二进制
// let binary = 0B010101; // 第一位是0 第二位是B/b 
// console.log(binary) 
// // 声明八进制
// let octal = 0o666; // 同理
// console.log(octal)
// //数字验证 Number.isFinite 
// let a = 11/4;
// console.log(Number.isFinite(a)); // true
// console.log(Number.isFinite(NaN)) // false
// console.log(Number.isFinite(undefined)) //false
// console.log(Number.isFinite(null)) //false
// //NaN验证 Numer.isNaN
// // 判断是否为整数 Number.isInteger
// // 整数转换 Number.parseInt 浮点型 Number.parseFloat
// //ES5 整数取值范围
// let b = Math.pow(2,53)-1; // Math.pow(2,53)-1 是最大,加负号为最小
// console.log(b)
// console.log(Number.MAX_SAFE_INTEGER); // 最大数 称常量
// console.log(Number.MIN_SAFE_INTEGER); // 最小数
// // 安全整数判断 Number.isSafeInteger

// 第七节: ES6中新增的数组知识-1

// //json转数组
// let json = {
// 	'0' : 'jjj',
// 	'1' : '幻夜',
// 	length : 2
// }
// console.log(Array.from(json))
// // 把文本,字符串,变量转换成数组
// let arr1 = Array.of(2,3,4,5,6);
// let arr2 = Array.of('2','3','4','5','6');
// console.log(arr2);
// // find() 实例方法  value:当前查找的值 index:当前查找的索引  arr:当前数组
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.find((value,index,arr)=>{
// 	// return arr
// 	// return value > 5
// 	return index > 5
// }))

// 第八节: ES6中新增的数组知识-2

// //fill() 填充 接收三个参数 填充的变量,开始填充的位置,填充到的位置
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.fill('jjj',2,3);
// console.log(arr);
// // for of 循环
// let arr1 = ['jjj','幻夜'];
// for(let item of arr1){
// 	console.log(item);
//  }
// // for of 数组索引
// let arr2 = ['jjj','幻夜'];
// for(let index of arr2.keys()){
// 	console.log(index);
//  }
// // for of 输出数组的内容和索引
// let arr3 = ['jjj','幻夜'];
// for(let [index,val] of arr3.entries()){
// 	console.log(index+ ' : ' + val);
// }
// // entries 生成的是iterator形式的数组
// let arr4 = ['jjj','幻夜'];
// let list = arr4.entries();
// console.log(list.next().value);
// console.log(list.next().value);

// 第九节: ES6中的箭头函数和扩展

// let add = (a,b=2) => a+b;
// console.log(add(1,3))
// console.log(add.length) // length取决于 括号里面的参数有没有定义,如果有则默认排除,故现在length为1

// 第十节: ES6的函数和数组补漏

// //json对象的解析
// let json = {
// 	a : 'jjj',
// 	b : '幻夜'
// }
// function fun({a,b}){
// 	console.log(a,b);
// }
// fun(json)

// //数组的函数解析
// let arr = ['jjj','幻夜'];
// function fun(a,b){
// 	console.log(a,b)
// }
// fun(...arr);

// // in是用来判断对象或者数组中是否存在某个值
// let obj ={
// 	a : 'jjj',
// 	b : '幻夜'
// }
// console.log('a' in obj) // true
// // in 解决了数组里面值为0,但不是空值的问题
// let arr1 = ['jjj',,,,,];
// console.log(0 in arr1); // 0指的是数组下标位置是否为空

// // 数组遍历的方法 for for-of forEach filter some map 
// let arr2 = ['jjj','幻夜'];
// arr2.forEach((val,index)=> console.log(index,val));
// arr2.filter(x=>console.log(x))
// arr2.some(x=>console.log(x))
// console.log(arr2.map(x=>'web')) // 替换的功能

// //数组转换成字符串 arr.toString() 或 arr.join()

// 第十一节: ES6中的对象

// 老方法
// let name = "jjj";
// let skill = "web";
// let obj = {name:name,skill:skill};
// console.log(obj)

// 新方法
// let name = "jjj";
// let skill = "web";
// let obj = {name,skill}; // 没有赋值操作了
// console.log(obj)

// key值的构建
// let key = "skill";
// let obj = {
// 	[key] : "web"
// }
// console.log(obj)  // skill:web

// 自定义对象方法
// let obj = {
// 	add:function(a,b){
// 		return a+b;
// 	}
// }
// console.log(obj.add(1,2))

//is()
// let obj1 = {name:'jjj'};
// let obj2 = {name:'jjj'};
// console.log(obj1.name === obj2.name) // true
// console.log(Object.is(obj1.name,obj2.name)) // true
// // 秘诀: === 为同值相等 is()为严格相等(严格比较)
// console.log(+0 === -0); // true
// console.log(NaN === NaN); // false
// console.log(Object.is(+0,-0)); // false
// console.log(Object.is(NaN,NaN)); // true

// assign()
// let a = {a:'jjj'};
// let b = {b:'幻夜'};
// let c = {c:'web'};
// let d = Object.assign(a,b,c);
// console.log(d) // 输入a,b,c

// 第十二节: Symbol在对象中的作用

// 声明Symbol
// let a = new String(); // typeof a new生成的 都是object 
// let b = new Number();
// let c = new Array();
// let d = new Boolean();
// let e = new Object();
// let f = Symbol();
// console.log(typeof(f)); // symbol

// let g = Symbol('jjj');
// console.log(g); // 红字表示Symbol类型
// console.log(g.toString()) // 黑字表示字符串

// // 用Symbol构建对象的key
// let jjj = Symbol();
// let obj = {
// 	[jjj] : '幻夜'
// };
// // 有个坑: 这里不能用obj.jjj 而是用obj[jjj] 赋值也是
// console.log(obj[jjj]);
// obj[jjj] = 'web';
// console.log(obj[jjj]);

// Symbol 还能起到保护元素作用

// let obj = {name:'jjj',skill:'web',age:18};
// for(let item in obj){
// 	console.log(obj[item]) // 比如现在我们不想让别人知道年龄
// }

// let obj = {name:'jjj',skill:'web'};
// let age = Symbol();
// obj[age] = 18;
// console.log(obj)
// for(let item in obj){
// 	console.log(obj[item]) 
// }

// 第十三节: Set和WeakSet数据结构

//Set 传入的是伪数组 天然的去重,不允许重复值
// let setArr = new Set(['jjj','幻夜','web']);
// console.log(setArr)

// Set的增删查 增(add),单个删(delete),全删(clear),查(has)

//增: 数组方法是push 这里是add
//删: 数组方法是pop,shift 这里是delete
//查: has 返回的是true or false
//长度: 数组方法是length 这里是size
// let setArr = new Set(['jjj','幻夜','web','jjj']);
// console.log(setArr);
// setArr.add('前端');
// console.log(setArr);
// //setArr.clear(); // 全
// setArr.delete('web'); // 单
// console.log(setArr);
// console.log(setArr.has('jjj')); // true
// console.log(setArr.size)

// forEach 循环
// let setArr = new Set(['jjj','幻夜','web','jjj']);
// setArr.forEach((value)=>console.log(value))

//WeakSet 传入的可以是对象 天然的去重 类似于懒加载
// let weakObj = new WeakSet();
// let obj = {a:'jjj',b:'幻夜'};
// weakObj.add(obj);
// console.log(weakObj)

// 第十四节: map数据结构 

// set 增加值  get 取值 其他增删查 和Set方法一样
// let json = {
// 	name : 'jjj',
// 	skill : 'web'
// };
// let map = new Map();
// map.set(json,'iam'); // key : value 当然两者可以互换
// //map.set('i am',json)
// console.log(map);
// console.log(map.get(json)) // 取json对应的值 
// console.log(map.size)
// console.log(map.has('iam'))
// map.delete(json);
// console.log(map)

// let dedupe = (array) => Array.from(new Set(array));
// console.log(dedupe([1,2,3,3,4])) // 去重 

// 第十五节: 用Proxy 进行预处理

// let obj = {
// 	add:function(val){
// 		return val+100
// 	},
// 	name : 'Hi'
// }
// console.log(obj.add(100));
// console.log(obj.name);

//声明proxy

// let pro = new Proxy({
// 	add:function(val){
// 		return val+100;
// 	},
// 	name: 'JJJ'
// },{
// 	// 三个固定的参数 目标值 目标的key值,对象的属性 property
// 	get:function(target,key,property){ 
// 		console.log('Come in Get');
// 		return target[key];
// 	},
// 	// 四个固定的参数 目标 目标的key值 要改变的值 改变前的原始值
// 	set:function(target,key,value,receiver){
// 		console.log(`setting ${key} = ${value} 原始值 ${receiver}`);
// 		return target[key] = value;
// 	}
// })
// console.log(pro.add(100));
// pro.name="幻夜"
// console.log(pro.name)

// apply的使用

// let target = ()=>'我是你';
// let handler = {
// 	// 也是三个固定参数
// 	apply(target,ctx,args){
// 		console.log('do apply');
// 		return Reflect.apply(...arguments);
// 	}
// }
// let pro = new Proxy(target,handler);
// console.log(pro())
// 运行target()前,先运行钩子函数handler()

// 第十六节: promise对象的使用

//promise的出现是为了解决es5中的回调地狱: 多层回调函数使代码复杂,不易维护
// promise我们就以游戏关卡的形式来阐述

// let state = 1;  // 给一个状态

// // resolve 成功 
// // reject 失败
// function step1(resolve,reject){
//     console.log('第一关');
//     if(state==1){
//         resolve('成功通关');
//     }else{
//         reject('第一关通关失败,生命结束');
//     }
// }
// function step2(resolve,reject){
//     console.log('第二关');
//     if(state==1){
//         resolve('成功通关');
//     }else{
//         reject('第二关通关失败,生命结束');
//     }
// }
// function step3(resolve,reject){
//     console.log('第三关');
//     //state = 0;
//     if(state==1){
//         resolve('成功通关');
//     }else{
//         reject('第三关通关失败,生命结束');
//     }
// }

// new Promise(step1).then((val)=>{
// 	console.log(val); // val 值得是 resolve or reject
// 	return new Promise(step2)
// }).then((val)=>{
// 	console.log(val); 
// 	return new Promise(step3)
// }).then((val)=>{
// 	console.log(val); 
// 	return val
// })

// 第十七节: class类的使用

// 先声明类

// class Coder{
// 	name(val){
// 		console.log(val);
// 	}
// }
// let jjj  = new Coder;
// jjj.name('jjj');

// 声明多个方法 
// 第一坑 : 类里面的方法 不能加, 加,即报错
// 第二坑: 如果底下方法this引用上面的方法,切记上面的方法要return一下
// class Coder{
// 	name(val){
// 		console.log(val);
// 		return val; // 敲黑板
// 	}
// 	skill(val){
// 		console.log(this.name('jjj')+':'+'skill:'+val); // this 引用上面的方法
// 	}
// }
// let jjj  = new Coder;
// jjj.skill('web');

//类的传参
// class Coder{
// 	name(val){
// 		console.log(val);
// 		return val; 
// 	}
// 	skill(val){
// 		console.log(this.name('jjj')+':'+'skill:'+val); 
// 	}
// 	constructor(a,b){
// 		this.a = a;
// 		this.b = b;
// 	}
// 	add(){
// 		return this.a + this.b;
// 	}
// }
// let jjj = new Coder(1,2); // 注意这里传进去的参数,即是a,b,下面调add()的时候不需要传参了
// console.log(jjj.add())

// // 类的继承
// class htmler extends Coder{

// }
// let hyyqc = new htmler;
// hyyqc.name('hyyqc');

// 第十八节: 模块化操作

// export 负责模块的输出
// import 负责模块的引用

// let a = "jjj";
// let b = "幻夜";
// let c = "web";

// // as的好处就是不暴露模块里面的变量名称,也是为了更语义化

// export{
// 	name as a,
// 	cname as b,
// 	skill as c
// }
// // 在另一个文件引用 既是   import {name,cname,skill} from '...'


// // 一个页面里面可以有多个export 但是 只能有一个 export default 
// export 对应的 import导入 是 import {...} from '...'
// export default 对应的 import导入 是 import ... from '...'  // 不用花括号,名字可以随意