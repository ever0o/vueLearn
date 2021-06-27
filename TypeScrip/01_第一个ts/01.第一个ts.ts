(()=>{

    function sayHi(str:string){
        return "hello,world!" + str
    }
    let text = 'WangY'
    console.log(sayHi(text))

})()

//总结：ts的文件中如果直接书写js语法的代码，那么在html文件中直接引用ts文件，
//在谷歌浏览器中是可以直接使用的

/**
 * 总结：ts的文件中如果直接书写js语法的代码，那么在html文件中直接引用ts文件，
    在谷歌浏览器中是可以直接使用的
 * 如果ts文件中有了ts的语法代码，那么就需要把这个ts文件编译成js文件，在html
    文件中引入js的文件来使用
    ts文件中的函数的形参，如果使用某个类型进行修饰，那么最终在编译的js文件中
    是没有这个类型的
    ts文件中的变量使用的是let进行修饰的，编译的js文件中的修饰符就变成了var
 */