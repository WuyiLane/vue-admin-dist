<template>
  <div>
    ComponentA:
    {{flagdata}}
    <button @click="changeclick">更换数据</button>
  </div>
</template>

<script>
export default {
    name:'ComponentA',
    data(){
      return{
        flagdata:'早知道是这样'
      }
    },
    methods:{
      changeclick(){
        this.flagdata='如梦一场！'
      }
    }
}
</script>

<style scoped lang="">

</style>