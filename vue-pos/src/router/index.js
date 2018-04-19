import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import add from '@/components/add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'add',
      component: add
    }
  ]
})
