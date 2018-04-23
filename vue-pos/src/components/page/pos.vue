<template>
  <div class='pos'>
      <div>
          <el-row>
              <el-col :span='7' id="order-list" ref="orderList">
                  <el-tabs>
                      <el-tab-pane label='点餐'>点餐</el-tab-pane>
                      <el-tab-pane label='挂单'>挂单</el-tab-pane>
                      <el-tab-pane label='外卖'>外卖</el-tab-pane>
                  </el-tabs>
              </el-col>
              <!-- <el-col :span='7' ref="orderlist">订单蓝</el-col> -->
              <el-col :span='17'>产品栏</el-col>
          </el-row>
      </div>
  </div>
</template>
<script>
export default {
  name:'pos',
  mounted:function(){
        let orderHeight=document.body.clientHeight;
      document.getElementById("order-list").style.height=orderHeight+'px'
     
    }
}
</script>
<style>
    .pos{
        height: 100%;
    }
</style>


