<template>
  <h2>reactive 的使用</h2>
  <h3>名字：{{user.name}}</h3>
  <h3>年龄：{{user.age}}</h3>
  <h3>性别: {{user.gender}}</h3>
  <h3>妻子：{{user.wife}}</h3>
  <hr>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">

import { defineComponent,reactive,ref } from 'vue';

//暴漏出去一个定义好的组件
export default defineComponent({
  name: 'App',
  /**
   * 需求：现实用户的相关信息，点击按钮，可以更新用户的相关信息数据
   * 作用: 定义多个数据的响应式
          const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
          响应式转换是“深层的”：会影响对象内部所有嵌套的属性
          内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
   */
  setup(){
    // 把数据变成响应式的数据
    // 为了下面新添加属性的时候不报错，在目标对象上添加any类型或者是在reactive<any>加泛型都是可以避免报错的。
    const obj:any = {
      name: 'Alex',
      age: 20,
      wife: {
        name: 'Bob',
        age: 18,
        cars: ['1','2','3'],
      }
    }

    //返回的是proxy的代理对象，被代理者就是reactive中的传入的对象
    // user 现在是代理对象,obj 是目标对象
    // user 对象的类型是Proxy
    const user = reactive(obj)
    console.log(obj);

    const updateUser = ()=>{
      // 直接使用目标对象的方式来更新目标对象中的成员的值，是不可能的，只能使用代理对象的方式来更新数据(响应式数据)
      // obj.name += '==='
      //下面的都是响应式的数据，可以改变页面的值
      // user.name += '++'
      // user.age += 2
      // user.wife.name += '++'
      // user.wife.cars[0] = '4'

      /***
       *  user---代理对象    obj---目标对象
       * user对象或者是obj对象添加一个新的属性，哪一种方式会影响界面的更新
       * user对象或者obj对象中移除一个已经存在的属性，哪一种方式会影响界面的更新
       * 
       * 总结：如果操作代理对象，目标对象中的数据也会随之变化，同时如果想要在操作数据的时候，界面也要跟着重新更新渲染，
       * 那么也要操作代理对象
       */
        //新添加属性 对目标对象新增属性的时候，页面不能更新渲染
        //obj.gender = '男' 
        //新添加属性，对代理对象新增属性的时候，页面可以更新渲染，并且这个数据最终也添加到了obj对象上了
        //user.gender = '男'
        //删除属性，对目标对象删除属性的时候，页面不能更新渲染，但是这个属性已经被删除了
        //delete obj.age
        //删除属性，对代理对象删除属性的时候，页面可以更新渲染，并且这个属性最终也在obj对象上被删除
        //delete user.age
      /**
       * 通过当前的代理对象找到该对象中的某个属性，更改该属性中的某个数组中的某个数组的数据
       * 
       */
      // user.wife.cars[1] = '9'
      //通过当前的代理对象把目标对象中的某个数组属性中添加一个新的属性
      user.wife.cars[3] = '20'
    }
    return{
      user,
      updateUser,
    }
  }
});
</script>
