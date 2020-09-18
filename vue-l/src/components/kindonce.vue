<template>
  <div>
      <div>
          <!--  元素添加 v-once  不能修改 -->
          <p v-once>{{msg}}</p>
          <button @click="checkfun()">修改</button>
      </div>
      <!--  数组的更新检测 -->
      <div>
          <ul>
              <li v-for="(item,index) in getDate" :key="index">{{index}}:{{item}}</li>
          </ul>
          <button @click="pushfun()">点击</button>
          <button @click="popfun()">移除</button>
          <button @click="cocantfun()">合并数组</button>
      </div>
      <div>
          <ul>
              <li v-for="(item,index) in getsound" :key="index">
                  {{item}}
              </li>
          </ul>
          <button @click="addfun">addfunction</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'kindonce',
    data() {
        return{
            msg:'我是夏末',
            getDate:[
                'time',
                'ours',
                'mustions'
            ],
            //对象
            getsound:{
                name:'小半',
                age:20,
                height:1.78
            }
        }
    },
    methods:{
        checkfun(){
            this.msg='我是秋初'
        },
        pushfun(){
            //  向数组里push 一条数据
            this.getDate.push('sashme')
        },
        popfun(){
            this.getDate.unshift('cover-empty');
        },
        cocantfun(){
            // 视图却没有刷新
            //赋值给一个新的数组 改变原数组
            //concat方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。
            console.log(this.getDate.concat(['xiaoming','xiaohua','xiaowei']))
            this.getDate =this.getDate.concat(['xiaoming','xiaohua','xiaowei'])
            
        },
        addfun(){
            //使用vm.$set形式添加全局
            //vm 是vue的对象 this 是组件 也是vue的对象 this 相当于 vue里的vm
            this.$set(this.getsound,'school','燕山二中')
            console.log(this)
        }
    }
}
</script>

<style lang="">

</style>