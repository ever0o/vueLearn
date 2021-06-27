(()=>{

/**
 * 在TS中，我们使用接口来定义对象的类型
 * 接口：时对象的状态(属性)和行为(方法)的抽象(描述)
 * 接口类型的对象
 *     多了或者少了属性时不允许的
 *      可选属性：?
 *      只读属性：readonly
 * 
 * 
 * readonly vs const
 * 最简单的判断改用readonly 还是const 的方法是看要把它作为变量使用还是作为一个
 * 属性。作为变量使用的话const，若作为属性则使用readonly
 */

    interface IPerson {
        readonly id: number //加入readonly代表属性只读
        name: string
        age: number
        sex?: string  //加入?代表该属性可选
    }

    const person1: IPerson ={
        id: 1, 
        name: 'alex',
        age: 20,
       //sex: '1'
    }

    // person1.id = 3   修改只读属性是不被允许的

    console.log(person1);

    //接口的函数类型
    /***
     * 为了使用接口表示函数类型，我们需要给接口定义一个调用签名，它就像是一个只有参数
     * 列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型
     */
    
    interface searchFunc{
        (source: string,subStr: string): boolean
    }

    const mySearch: searchFunc=function (source: string, sub: string): boolean{
        return source.search(sub) > -1
    }

    console.log(mySearch('abc','bc'));

    /**
     * 类类型： 实现接口
     * 一个类可以实现多个接口
     * 一个接口可以继承多个接口
     */
    interface Alarm {
        alert(): any
    }


    interface Light {
        lightOn(): void
        lightOff(): void
    }


    class Car implements Alarm{
        alert() {
            console.log('Car alert')
        }
    }

    class Car2 implements Alarm, Light{
        alert() {
            console.log('Car alert')
        }
        lightOn(){
            console.log('Car light on')
        }
        lightOff(){
            console.log('Car light off')
        }
    }

    
})()