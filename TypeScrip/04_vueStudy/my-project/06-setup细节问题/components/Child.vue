<template>  
    <h2>Child 子集组件</h2>
    <h3>msg:{{msg}}</h3>
    <!-- <h3>count:{{count}}</h3> -->
    <button @click="emitXxx">分发事件</button>
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

    // setup中的返回值是一个对象，内部的属性和方法是给html模板使用的
    // setup中的对象内部的属性和data函数中的return对象的属性都可以在html模板中使用
    // setup中的对象中的属性和data函数中的对象中的属性会合并组件对象的属性
    // setup中的对象中的方法和methods对象中的方法会合并为组件对象的方法
    // 在vue3中尽量不要混合的使用data和setup及methods和setup
    // setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据

    // beforeCreate(){
    //     console.log('beforeCreate执行了')
    // },
    // 界面选然后的生命周期回调
    // mounted(){
    //     console.log('this : ' ,this)
    // },
    // // 方法
    // methods:{
    //     showMsg(){
    //         console.log('methods中的showMsg方法')
    //     }
    // },
    setup(props,context){
        // props参数，是一个对象，里面有父级组件向子集组件传递的数据，并且是在子集组件中使用props接收到的所有的属性   包含props配置声明且传入了的所有属性的对象
        console.log('props',props)
        console.log('msg : ' + props.msg)
        // context 参数，是一个对象，里面有attrs对象（获取当前组件标签上的属性，但是该属性是在props中没有声明接收的所有的属性的对象），emit方法（分发事件）,slots对象(插槽)
        // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
        console.log('context',context)
        console.log('context.attrs : ', context.attrs)
        console.log('context.emit : ',context.emit)
        console.log('==================')
        console.log('setup执行了',this)

        const showMsg1=()=>{
            console.log('setup 中的showMsg1方法')
        }

        function emitXxx(){
            context.emit('xxx','++');
        }

        return {
            showMsg1,emitXxx
            // setup 中一般都是返回一个对象，对象中的属性和方法都可以在HTML模板中直接使用
        }

    },
    // data(){
    //     return{
    //         count:10
    //     }
    // }
})
</script>

<style>

</style>