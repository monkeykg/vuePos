<template>
  <div class='pos'>
      <div>
          <el-row>
              <el-col :span='7' id="order-list" >
                <el-tabs>
                      <el-tab-pane label='点餐'>
                          <el-table :data='tableData' border style="width:100%" >
                              <el-table-column label='商品' prop='goodsName' fixed='left'></el-table-column>
                              <el-table-column label='数量' prop='count' width='50'></el-table-column>
                              <el-table-column label='金额' prop='price' width='70' ></el-table-column>
                              <el-table-column label='操作' width='90' fixed='right'>
                                  <template slot-scope="scope">
                                      <el-button type='text' size='small'>删除</el-button>
                                      <el-button type='text' size='small'>增加</el-button>
                                  </template>
                              </el-table-column>
                          </el-table>
                          <div v-if=" this.totalCount>0">数量：{{totalCount}} &nbsp &nbsp &nbsp 总价：{{totalMoney}}元</div>
                      </el-tab-pane>
                      <el-tab-pane label='挂单'>挂单</el-tab-pane>
                      <el-tab-pane label='外卖'>外卖</el-tab-pane>
                </el-tabs>
                <div class='btns'>
                    <el-button type="warning" size='small'>挂单</el-button>
                    <el-button type="danger" size='small'>删除</el-button>
                    <el-button type="success" size='small'>结账</el-button>
                </div> 
              </el-col>
              <!-- <el-col :span='7' ref="orderlist">订单蓝</el-col> -->
              <el-col :span='17'>
                  <div class='often-goods'>
                      <div class="title">常用商品</div>
                      <div class="often-goods-list">
                          <ul>
                            <li v-for="(value,index) in oftenGoods " @click="addOrderList(value)">
                                <span>{{value.goodsName}}</span>
                                <span class="o-price">￥15元</span>
                            </li>
                          </ul>
                      </div>
                  </div>
                  <div class="goods-type">
                      <el-tabs>
                        <el-tab-pane label='主食'>
                            <ul class='goods-type-list'>
                                <li v-for="(value,index) in foodstype0" @click="addOrderList(value)">
                                    <img :src="value.goodsImg" alt="">
                                    <span>{{value.goodsName}}</span>
                                    <span>￥{{value.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label='小食'>
                            <ul class='goods-type-list'>
                                <li v-for="(value,index) in foodstype1"  @click="addOrderList(value)">
                                    <img :src="value.goodsImg" alt="">
                                    <span>{{value.goodsName}}</span>
                                    <span>￥{{value.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label='饮料'>
                            <ul class='goods-type-list'>
                                <li v-for="(value,index) in foodstype2"  @click="addOrderList(value)">
                                    <img :src="value.goodsImg" alt="">
                                    <span>{{value.goodsName}}</span>
                                    <span>￥{{value.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label='套餐'>
                            <ul class='goods-type-list'>
                                <li v-for="(value,index) in foodstype3"  @click="addOrderList(value)">
                                    <img :src="value.goodsImg" alt="">
                                    <span>{{value.goodsName}}</span>
                                    <span>￥{{value.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                      </el-tabs>
                  </div>
              </el-col>
          </el-row>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'pos',
  mounted:function(){
        let orderHeight=document.body.clientHeight;
      document.getElementById("order-list").style.height=orderHeight+'px'
    },
    data(){
        return{
        tableData: [] ,
        totalCount:0,
        totalMoney:0,
        oftenGoods:[],
        foodstype0:[],
        foodstype1:[],
        foodstype2:[],
        foodstype3:[],
        }
    },
    created(){
        this.oftenGoods=[];
        this.foodstype0=[];
        this.foodstype1=[];
        this.foodstype2=[];
        this.foodstype3=[];
        axios.get('http://jspang.com/DemoApi/oftenGoods.php').then((Response)=>{
            console.dir(Response.data)
            this.oftenGoods=Response.data
        }).catch((error)=>{
            alert('网络故障，请稍等重试')
        }),
         axios.get('http://jspang.com/DemoApi/typeGoods.php').then((Response)=>{
            console.dir(Response.data)
             this.foodstype0=Response.data[0]
             this.foodstype1=Response.data[1]
             this.foodstype2=Response.data[2]
             this.foodstype3=Response.data[3]
            
        }).catch((error)=>{
            alert('网络故障，请稍等重试')
        })
    },
    methods:{
        // 添加到左侧的购物列表
        addOrderList(value){
        let ishave=false;
        this.totalCount=0; //汇总数量清0
            this.totalMoney=0;
        // 判断是否已经存在左侧列表
        for(let i=0;i<this.tableData.length;i++){
            if(this.tableData[i].goodsId==value.goodsId){
                // 存在
                ishave=true;
            }
        }
        if(ishave){
                let arr = this.tableData.filter(o =>o.goodsId == value.goodsId);
                 arr[0].count++;
                 console.log(arr[0].count)
        }else{
            let newGoods={
                goodsId:value.goodsId,goodsName:value.goodsName,price:value.price,count:1
            }
        this.tableData.push(newGoods);
        }
        // 数量和金额
        // console.log(this.totalCount)
            // for(let j=0;j<this.tableData.length;j++){
            //     //数量总计
            //     this.totalCount+=this.tableData[j].count; 
            //     //总价统计
            //     this.totalMoney+=this.tableData[j].count*this.tableData[j].price
            // }
            for(let i of this.tableData){
                 this.totalCount+=i.count;
                 this.totalMoney+=i.count*i.price;
            }
            // console.log(this.totalCount)
        }
       
    }
    
    
}
</script>
<style>
    .pos{
        height: 100%;
    }
    #order-list{
        border-right:1px solid #aeaeae
    }
    #order-list .btns{
        text-align: center
    }
    .often-goods .title{
      height: 20px;
      border-bottom:1px solid #d3dce6 ;
       background-color: #F9FAFC;
       padding:10px; 
    }
    .often-goods-list ul::after{
        content: '';
        display: block;
        clear: both;
    }
    .often-goods-list li{
        float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
    }
    .often-goods-list li .o-price{
         color:#58B7FF;
    }
    .goods-type-list{
        display: flex
    }
    .goods-type-list li{
        flex: 1;
        padding:10px;
        font-size: 14px;
        font-weight: 700;
        text-align: center;
    }
    .goods-type-list li img{
        width:100%;
    }
</style>


