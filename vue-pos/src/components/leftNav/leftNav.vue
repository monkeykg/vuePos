<template>
  <div class="leftNav">
      <div class="icon">
          <ul>
              <li> <i class="icon-gouwuche iconfont"></i></li>
              <li> <i class="icon-gouwuche iconfont"></i></li>
              <li> <i class="icon-gouwuche iconfont"></i></li>
              <li> <i class="icon-gouwuche iconfont"></i></li>
              <li> <i class="icon-gouwuche iconfont"></i></li>
          </ul>
      </div>
      <div class='navwrapper'>
          <el-tabs v-model="activeName">
              <el-tab-pane label='结账' name='first'>结账</el-tab-pane>
              <el-tab-pane label='挂单' name='second'>挂单</el-tab-pane>
              <el-tab-pane label='外卖' name='third'>外卖</el-tab-pane>
          </el-tabs>
      </div>
  </div>
</template>
<script>
export default {
  name:'leftNav',
data(){
    return{
    activeName:'first'
    }
}
}
</script>
<style lang="stylus">
.leftNav
    width 30%
    height 100%
    display flex
    .icon
        flex 0 0 30px
        width 30px
        background rgba(0,0,0,0.5)
        &>ul>li
            height 30px
            line-height 30px
            font-size 20px
            text-align  center
            color rgb(12,27,144)
    .navwrapper
        flex 1 
        height 100%
        background rgba(0,0,0,0.2)
</style>


