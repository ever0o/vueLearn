(()=>{
    // 公共,私有与受保护的修饰符
    class Animal{
        public name:string;

        public constructor(name:string){
            this.name = name;
        }

        public run (distance: number=0){
            console.log(`${this.name} run ${distance}m`);
        }
    }


    class Person extends Animal{
        private age:number = 18;
        protected sex: string ='男';

        run (distance:number=5){
            console.log('Person jumping...')
            super.run(distance)
        }
    }

    class Student extends Person{
        run(distance:number=6){
            console.log('Student junping...')

            console.log(this.sex)//子类能看到父类中受保护的成员
            // console.log(this.age)  子类看不到父类中私有的成员

            super.run(distance)
        }
    }


})()