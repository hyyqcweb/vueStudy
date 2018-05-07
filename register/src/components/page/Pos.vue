<!-- 动态数据 -->
<template>
  <div class="pos">
  	<el-row>
  		<el-col :span='7' class="pos-order" id="order-list">
  			<el-tabs>
           <el-tab-pane label="点餐">

              <el-table :data="tableData" border show-summary style="width:100%;overflow-x:hidden;">
                <el-table-column prop="goodsName" label="商品名称" align="center"></el-table-column>
                <el-table-column prop="count" label="数量" align="center"></el-table-column>
                <el-table-column prop="price" label="价格" align="center"></el-table-column>
                <el-table-column label="操作" fixed="right" align="center">
                  <template slot-scope="scope">
                      <el-button type="text" size="small">增加</el-button>
                      <el-button type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>

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
                   <li v-for="goods in universalGoods">
                     <span>{{goods.goodsName}}</span>
                     <span class="items-price">￥{{goods.price}}元</span>
                   </li>
                 </ul>
            </div>
            <div class="clear"></div>
            <el-tabs class="buttom-goods">
              <el-tab-pane label="主食">
                <ul class="cook-items">
                  <li v-for="cook in cookItems">
                    <span class="foodImage"><img :src="cook.goodsImg"></span>
                    <span class="foodName">{{cook.goodsName}}</span>
                    <span class="foodPrice">￥{{cook.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class="cook-items">
                  <li v-for="cook in cook1Items">
                    <span class="foodImage"><img :src="cook.goodsImg"></span>
                    <span class="foodName">{{cook.goodsName}}</span>
                    <span class="foodPrice">￥{{cook.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class="cook-items">
                  <li v-for="cook in cook2Items">
                    <span class="foodImage"><img :src="cook.goodsImg"></span>
                    <span class="foodName">{{cook.goodsName}}</span>
                    <span class="foodPrice">￥{{cook.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class="cook-items">
                  <li v-for="cook in cook3Items">
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
      tableData:[{
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
          goodsName: '甜筒',
          price: 8,
          count:1
        }],
      // 常用商品上
      universalGoods:[],
      // 常用商品下
      cookItems:[],
      cook1Items:[],
      cook2Items:[],
      cook3Items:[],
    }
  },
  created(){
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
  }
}
</script>

<style lang="less" scoped>
	.pos-order{
		background-color: #F9FAFC;
		border-right: 1px solid #C0CCDA;
		height: 100vh;
	}
  .universal-goods{
    .universal-title{
      height:18px;
      border-bottom: 2px solid #e4e7ed;
      background-color: #F9FAFC;
      margin-top: 0;
      padding: 10px;
      text-align: left;
      font-weight: normal;
      font:18px/18px "Microsoft YaHei";
    }
    .universal-items ul li{
      list-style: none;
      float: left;
      border:1px solid #E5E9F2;
      margin: 5px;
      background-color: #fff;
      padding: 10px;
      .items-price{
          color:#58B7FF;
      }
    }
    .clear{
      clear:both;
    }
    .buttom-goods{
      margin-top: 20px;
      .cook-items li{
          list-style: none;
          width:15%;
          border:1px solid #E5E9F2;
          height: auot;
          overflow: hidden;
          background-color:#fff;
          padding: 2px;
          float:left;
          margin: 2px;
          span{
            display: block;
            float:left;
          }
          .foodImage{
            img{
              width: 50%;
            }
         }
         .foodName{
             font-size: 18px;
             padding-left: 10px;
             color:brown;

         }
         .foodPrice{
             font-size: 16px;
             padding-left: 10px;
         }
      }
    }
  }
</style>

   <!-- mounted(){
    //利用js强行把高度变为100%,下面vh单位和js类似,但是兼容性不好
    let orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px'; 
   } -->