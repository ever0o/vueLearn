<template>  
    <h2>Child 子集组件</h2>
    <h3>msg:{{msg}}</h3>
</template>

<script lang="ts" >

import {defineComponent} from 'vue'


export default defineComponent({
    name: 'Child',
    props:['msg'],
    //setup 细节问题
    // setup 是在beforeCreate生命周期回调之前就执行了，而且就执行一次
    // 由此可以推断出：setup在执行的时候，当前的组件还没有创建出来，也就意味着组件实例对象根本就不能用
    // this 是 undefined，说明，就不能通过this再去调用data/computed/methods/props中的相关内容了
    // 其实所有的composition API相关回调函数中也都不可以
    beforeCreate(){
        console.log('beforeCreate执行了')
    },
    // mounted(){},
    setup(){
        console.log('setup执行了',this)
        return {
            // setup 中一般都是返回一个对象，对象中的属性和方法都可以在HTML模板中直接使用
        }
    }
})
</script>

<style>

</style>