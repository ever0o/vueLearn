(()=>{
    /**
     * 关于类继承更复杂的例子
     * 
     */
    class Animal{
        name: string

        constructor(name: string){
            this.name = name
        }

        run(distance: number=0){
            console.log(`${this.name} run ${distance}m`)
        }
    }

    class Snake extends Animal{
        constructor(name: string){
            //调用父类构造方法
            super(name)
        }
        
        run(distance: number=5){
            console.log('sliding...')
            super.run(distance)
        }
    }

    class Horse extends Animal{
        constructor(name: string){
            // 调用父类构造方法
            super(name)
        }

        run(distance: number=50){
            console.log('dashing...')
            super.run(distance)
        }
    
        xxx () {
            console.log('xxx()')
        }
    }

    const snake = new Snake('sn')
    snake.run()

    const horse = new Horse('ho')
    horse.run()

    //父类型引向子类型的实例==》多态
    const tom: Animal = new Horse('ho22')
    tom.run()

    //如果子类型没有扩展的方法，可以让子类型引用父类的实例
    const tom3: Snake = new Animal('tom3')
    tom3.run()
    //如果子类型有扩展的方法，不能让子类型指向父类的实例
    // const tom2: Horse = new Animal('tom2')
    // tom2.run()
})()