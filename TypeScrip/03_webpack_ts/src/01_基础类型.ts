//基础类型
(()=>{
    //布尔类型   boolean
    let flag:boolean = true
    console.log(flag)

    //数字类型   number
    //十进制
    let a1:number = 10
    console.log(a1)

    //二进制
    let a2:number  = 0b1010
    console.log(a2)

    //八进制
    let a3:number = 0o12
    console.log(a3)

    //十六进制
    let a4:number = 0xa 
    console.log(a4)

    //字符串类型  string
    let s1:string = 'alex'
    let s2:string = 'tom'
    console.log(s1)
    console.log(`${s1},${s2}`)

    //数组
    let list1: number[] = [1,2,3]
    let list2: Array<number> = [1,2,3]
    console.log(list1)
    console.log(list2)

    //元组
    let t1: [string,number]
    t1 = ['hello',10]
    console.log(t1)

    //枚举
    enum  Color {
        Red,
        Green,
        Blue,
    }

    let myColor: Color = Color.Green;
    console.log(myColor, Color.Red, Color.Blue)

    //any
    let notSure: any = 4
    console.log(notSure)
    notSure = 'hello'
    console.log(notSure)
    notSure = false
    console.log(notSure)

    //any[]
    let list: any[] = [1, true, 'free']
    list[1]=100
    console.log(list)

    //void 
    //注：生命一个void类型的变量没有什么大用，因为你只能为它赋予undefined
    function fn(): void {
        console.log('fn()')
    }

    let unusable: void = undefined

    //object
    function fn3(obj:object): object {
        console.log('fn2()', obj)
        return {}
    }

    console.log(fn3(new String('abc')))
    console.log(fn3(String))

    //联合类型
    function tostr(x: number|string): string{
        return x.toString()
    }

    console.log(tostr(1))
    console.log(tostr('alex'))

    /**
     * 类型断言：可以用来手动指定一个值的类型
     * 语法：
     *     方式一：<类型>值
     *     方式二：值   as    类型   tsx中只能用这种类型
     */
    function length1(x: number|string){
        if((<string>x).length){
            return (x as string).length
        }else {
            return x.toString().length
        }
    }

    console.log(length1('alex'))
    console.log(length1(1))

    /**
     * 类型推断：TS会在没有明确的指定类型的时候推测出一个类型
     * 有下面两种情况：1.定义变量时赋值了，推断为对应的类型
     *                2.定义变量时没有赋值，推断为any类型
     */
    let b9 = 123
    let b10 
    b10 = 123
    b10 = 'abc'
})()