<template>
  <div>
      <slot name="header"></slot>
    <slot></slot>
    <p>
    润扬品牌网站
    </p>
    <!-- name 插槽 使用-->
    <slot name="footer"></slot>
    <slot :getDate="getDate" name="dataSlot"></slot> 
    <!--  把数据传递给 父组件  数据插槽-->
  </div>
</template>

<script>
export default {
    name:"compsolt",
    data(){
        return{
            // msg:'我是谁'
            //  作用域插槽
            getDate:'我是有准备的数据'
        }
    }
}
</script>

<style>

</style>