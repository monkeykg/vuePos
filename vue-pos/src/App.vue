<template>
  <div id="app">
    <leftNav></leftNav>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import leftNav from '@/components/leftNav/leftNav'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
#app{
  width: 100%;
  height:100%;
}
</style>
