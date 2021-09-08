(()=>{
    /**
     * 静态属性
     *      静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及方法，也称之为：静态成员
     *      静态成员在使用的时候是通过类名.的这种语法来调用的
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