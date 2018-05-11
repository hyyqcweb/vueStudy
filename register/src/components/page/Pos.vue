<!-- 动态数据 -->
<template>
  <div class="pos">
  	<el-row>
  		<el-col :span='7' class="pos-order" id="order-list">
  			<el-tabs>
           <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width:100%;overflow-x:hidden;">
                <el-table-column prop="goodsName" label="商品名称" align="center"></el-table-column>
                <el-table-column prop="count" label="数量" align="center"></el-table-column>
                <el-table-column prop="price" label="价格" align="center"></el-table-column>
                <el-table-column label="操作" fixed="right" align="center">
                  <template slot-scope="scope" class="operate">
                      <el-button type="text" size="small">删除</el-button>
                      <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div>
                <span style="margin-right:25px">数量: {{totalCount}}</span>
                <span>金额: {{totalMoney}}元</span>
              </div>
              <el-row style="margin-top:20px">
                <el-button type="warning" >挂单</el-button>
                <el-button type="danger" >删除</el-button>
                <el-button type="success" >结账</el-button>
              </el-row> 

            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖   
            </el-tab-pane>   
        </el-tabs>        
  		</el-col>
  		<el-col :span='17'>
  			<div class="universal-goods">
            <h2 class="universal-title">常用商品</h2>
            <div class="universal-items">
                 <ul>
                   <li v-for="goods in universalGoods" @click="addOrderList(goods)">
                     <span>{{goods.goodsName}}</span>
                     <span class="items-price">￥{{goods.price}}元</span>
                   </li>
                 </ul>
            </div>
            <div class="clear"></div>
            <el-tabs class="buttom-goods">
              <el-tab-pane label="主食">
                <ul class="cook-items">
                  <li v-for="cook in cookItems" @click="addOrderList(cook)">
                    <span class="foodImage"><img :src="cook.goodsImg"></span>
                    <span class="foodName">{{cook.goodsName}}</span>
                    <span class="foodPrice">￥{{cook.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class="cook-items">
                  <li v-for="cook in cook1Items" @click="addOrderList(cook)">
                    <span class="foodImage"><img :src="cook.goodsImg"></span>
                    <span class="foodName">{{cook.goodsName}}</span>
                    <span class="foodPrice">￥{{cook.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class="cook-items">
                  <li v-for="cook in cook2Items" @click="addOrderList(cook)">
                    <span class="foodImage"><img :src="cook.goodsImg"></span>
                    <span class="foodName">{{cook.goodsName}}</span>
                    <span class="foodPrice">￥{{cook.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class="cook-items">
                  <li v-for="cook in cook3Items" @click="addOrderList(cook)">
                    <span class="foodImage"><img :src="cook.goodsImg"></span>
                    <span class="foodName">{{cook.goodsName}}</span>
                    <span class="foodPrice">￥{{cook.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>

        </div>
  		</el-col>
  	</el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'pos',
  data(){
    return {
      // 点餐数据
      tableData:[],
      // 常用商品上
      universalGoods:[],
      // 常用商品下
      cookItems:[],
      cook1Items:[],
      cook2Items:[],
      cook3Items:[],
      totalMoney:0,
      totalCount:0
    }
  },
  created(){
    // created 生命周期钩子,当页面被创建,刷新时启用
    // 常用商品上
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(reponse => {
      console.log(reponse);
      this.universalGoods = reponse.data;
    })
    .catch(error => {
      console.log(error);
    })
    // 常用商品下
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(reponse => {
      console.log(reponse);
      this.cookItems = reponse.data[0];
      this.cook1Items = reponse.data[1];
      this.cook2Items = reponse.data[2];
      this.cook3Items = reponse.data[3];
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods:{
    addOrderList(goods){
      // 初始化价格和数量
      this.totalMoney = 0;
      this.totalCount = 0;
      // 判断数据有没有在左侧的列表中
      let isHave = false;
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsId == goods.goodsId){
          isHave = true;
        }
      }
      if(isHave){
        let arr = this.tableData.filter(obj => obj.goodsId == goods.goodsId);
        arr[0].count++;
      }else{
        let newGoods = {
          goodsId : goods.goodsId,
          goodsName : goods.goodsName,
          price : goods.price,
          count : 1
        };
        this.tableData.push(newGoods);
      }
      // 计算价格和数量
      this.tableData.forEach((element)=>{
        this.totalCount += element.count;
        this.totalMoney =this.totalMoney+(element.price * element.count);
      })
    }
  }
}
</script>

<style lang="less" scoped src="../../assets/style.less">
</style>

   <!-- mounted(){
    //利用js强行把高度变为100%,下面vh单位和js类似,但是兼容性不好
    let orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px'; 
   } -->