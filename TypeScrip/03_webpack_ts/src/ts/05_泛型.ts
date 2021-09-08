(()=>{

    // 以下函数不用泛型
    // 实现根据指定数量和数据，创建一个包含一定数量个数据的数组
    function createArray(value: any, count: number): any[]{
        const arr: any[] = [];
        for (let i = 0; i < count; i++){
            arr.push(value)
        }
        return arr;
    }

    const arr1 = createArray(11,3);
    const arr2 = createArray('aa',3);
    console.log(arr1[0].toFixed(),arr2[0].split(''));

    // 使用函数泛型
    function createArray2<T>(value: T,count: number){
        const arr: Array<T> =[];
        for (let i = 0;i < count; i++){
            arr.push(value);
        }
        return arr;
    }

    const arr3 = createArray2<number>(11,3);
    console.log(arr3[0].toFixed());

    const arr4 = createArray2<string>('aa',3);
    console.log(arr4[0].split(''));

    // 多个泛型参数的函数
    function swap <K,V>(a: K,b:V): [K,V]{
        return [a,b];
    }
    const result = swap<string, number>('abc',123);
    console.log(result[0].length,result[1].toFixed());

    // 泛型接口
    interface IbaseCRUD <T>{
        data: T[]
        add: (t: T) => void
        getById: (id: number) => T
    }

    class User{
        id?: number;
        name: string;
        age: number;

        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
    }

    // 实现getById方法时候存疑，会报错 curd的data数组为空，所以，当实例化这个类的时候，直接调用getById这个方法会报错
    // class UserCRUD implements IbaseCRUD <User>{
    //     data: User[] = []

    //     add(user: User): void{
    //         user = {...user, id: Date.now()};
    //         this.data.push(user);
    //         console.log('保存user',user.id);
    //     }

    //     getById(id: number): User{
    //         return this.data.find(item => item.id===id);
    //     }
    // }
    // const userCRUD = new UserCRUD()
    // userCRUD.add(new User('tom', 12))
    // userCRUD.add(new User('tom2', 13))
    // console.log(userCRUD.data)
   
    //泛型类 泛型类存在问题，会报错   因为泛型类中的属性没有实例化，这地方代码存疑
    // class GenericNumber<T> {
    //     zeroValue: T
    //     add: (x: T,y: T) => T
    // }

    // let myGenericNumber = new GenericNumber<number>();
    // myGenericNumber.zeroValue = 0;
    // myGenericNumber.add= function(x,y){
    //     return x+ y;
    // }
    
    // let myGenericString = new GenericNumber<string>()
    // myGenericString.zeroValue = 'abc'
    // myGenericString.add = function(x, y) { 
    //   return x + y
    // }
    
    // console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
    // console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))

    // 没有泛型约束
    function fn <T>(x: T): void {

    }

    //泛型约束   定义一个接口，用来约束将来的某个类型中必须要有length这个属性
    interface Lengthwise {
        length: number;    
    }

    function fn2 <T extends Lengthwise>(x: T): void {
        console.log(x.length);
    }
    // 我们需要传入符合约束类型的值，必须包含存在length 属性:
    fn2('abc')


    
})()