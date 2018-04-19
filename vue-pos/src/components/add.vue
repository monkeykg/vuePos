<template>
  <div class="add">
      <ul>
          <li v-for="(val,index) in demo">
              <button @click="reduce(index)">-</button>
              <span>{{val}}</span>
              <button @click="addnum(index)">+</button>
          </li>
      </ul>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name:'add',
  data(){
      return{
          demo:[0,0,0,0,0,0]
      }
  },
  methods:{
      reduce(index){
          console.log(index)
      },
      addnum(index){
           console.log(index)
           let value=this.demo[index]++;
           Vue.set(this.demo,this.demo[index],value)
           console.log(this.demo)
      }
  }
}
</script>
