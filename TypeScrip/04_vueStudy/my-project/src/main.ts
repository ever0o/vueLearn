// 程序的入口文件，ts文件，是main.ts
//函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
//引入APP组件（所有组件的父级组件）
import App from './App.vue'
//创建APP应用返回对应的实例对象，然后调用mount方法进行挂载
createApp(App).mount('#app')
