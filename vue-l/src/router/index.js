import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Kindonce from '@/components/kindonce'
import Styleclass from '@/components/styleclass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'kindonce',
      name: 'Kindonce',
      component: Kindonce
    },
    {
      path: 'styleclass',
      name: 'Styleclass',
      component: Styleclass
    }
  ]
})
