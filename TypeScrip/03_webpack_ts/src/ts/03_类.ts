(()=>{
    class Greeter{
        message: string

        constructor(message: string){
            this.message = message
        }

        greet(): string{
            return 'hello '+ this.message
        }
    }

    const greeter = new Greeter('world')
    console.log(greeter.greet())
    /**
     * 类的继承
     * 
    */
    class Animal {
        run(distance: number) {
            console.log(`Animal run ${distance}m`)
        }
    }

    class Dog extends Animal{
        cry (){
            console.log('wang! wang!')
        }
    }

    const dog = new Dog();
    dog.cry()
    dog.run(100)

    

})()