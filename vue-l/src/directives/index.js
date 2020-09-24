import  Vue from 'vue';

Vue.directive(
    'focus',{
        inserted:function (el) {
            el.focus();
            //如果我用这个指令，后会获取到焦点
            console.log(el)
        }
    }
)