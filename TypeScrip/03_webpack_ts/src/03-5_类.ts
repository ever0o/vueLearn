(()=>{
    /**
     * 静态属性
     * 
     */
    class Person {
        name1: string = 'A';
        static name2: string = 'B';
    }

    console.log(Person.name2)
    console.log(new Person().name1)


    /***
     * 抽象类
     * 
     * 
     * 注意，在定义抽象类的方法的时候，要给定抽象类方法的返回值。否则会报错
     */
    abstract class Animal {
        abstract cry ():any

        run (){
            console.log('run()')
        }
    }

    class Dog extends Animal {
        cry () {
            console.log('Dog cry()')
        }
    }

    const dog = new Dog();
    dog.cry ()
    dog.run ()

})()