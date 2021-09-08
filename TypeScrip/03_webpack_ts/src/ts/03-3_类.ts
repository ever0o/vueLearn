(()=>{

    //你可以使用 readonly 关键字将属性设置位只读，只读属性必须在声明时
    //或构造函数里被初始化
    class Person {
        readonly name: string = 'abc';
        constructor(name: string) {
            this.name = name;
        }
    }

    let john = new Person('john');
    // john.name = 'alex' error

    /**
     * 参数属性 
     * 
     * 在下面的例子中，我们舍弃了参数name，在构造中使用readonly name
     * string 参数来创建和初始化 name成员。 我们把声明和赋值合在一处。
     */
    class Person2 {
        constructor(readonly name: string){

        }
    }

    const p = new Person2('alex');
    console.log(p.name);

    

})()