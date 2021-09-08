(()=>{
    /**
     * 存取器
     * 支持通过getters/setters来截取对对象成员的访问，帮助你有效的控制对对象
     * 成员的访问。
     * 
    */
    class Person {
        firstName: string = 'A'
        lastName: string = 'B'

        get fullName(){
            return this.firstName + '_' + this.lastName
        }

        set fullName(value){
            const names = value.split('-')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    const p = new Person()
    console.log(p.fullName)

    p.firstName = 'C'
    p.lastName = 'D'
    console.log(p.fullName)

    p.fullName = 'E-F'
    console.log(p.firstName,p.lastName)


})()