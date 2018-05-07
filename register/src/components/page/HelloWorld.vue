<!-- 静态数据 -->
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
              <el-tab-pane label="小食">小食</el-tab-pane>
              <el-tab-pane label="饮料">饮料</el-tab-pane>
              <el-tab-pane label="套餐">套餐</el-tab-pane>
            </el-tabs>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
      universalGoods:[{
            goodsId:1,
            goodsName:'香辣鸡腿堡',
            price:18
        }, {
            goodsId:2,
            goodsName:'田园鸡腿堡',
            price:15
        }, {
            goodsId:3,
            goodsName:'和风汉堡',
            price:15
        }, {
            goodsId:4,
            goodsName:'快乐全家桶',
            price:80
        }, {
            goodsId:5,
            goodsName:'脆皮炸鸡腿',
            price:10
        }, {
            goodsId:6,
            goodsName:'魔法鸡块',
            price:20
        }, {
            goodsId:7,
            goodsName:'可乐大杯',
            price:10
        }, {
            goodsId:8,
            goodsName:'雪顶咖啡',
            price:18
        }, {
            goodsId:9,
            goodsName:'大块鸡米花',
            price:15
        }, {
            goodsId:10,
            goodsName:'香脆鸡柳',
            price:17
        }],
        // 常用商品下
        cookItems:[
          {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ],
    }
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