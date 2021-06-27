/**
 * 类型注解:是一种轻量级的为函数或者变量添加的约束
 * */

(()=>{
    function showMsg(str:string) {
        return 'hello,world!'+str
    }
    let msg = 'WangY'
    console.log(showMsg(msg))
})()