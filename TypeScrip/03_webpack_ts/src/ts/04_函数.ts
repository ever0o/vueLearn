(()=>{
    /**
     * 函数
     * 
     */
    function add(x: number, y: number): number {
        return x + y;
    }

    let myAdd = function(x: number, y: number): number {
        return x + y;
    }

    let myAdd2: (x: number, y: number) => number = 
    function(x: number, y: number): number{
        return x + y;
    }

    /**
     * 可选参数和默认参数
     */
    function buildName(firstName: string='A', lastName?: string): string {
        if (lastName){
            return firstName + ' ' + lastName;
        }else {
            return firstName;
        }
    }
    /**
     * 剩余参数
     * 
    */
    console.log(buildName('C','D'))
    console.log(buildName('C'))
    console.log(buildName())

    function info(x:string, ...args:string[]){
        console.log(x,args)
    }

    info('abc','c','b','a')
    

// function reloadadd(x: string,y: string): string
// function reloadadd(x: number, y: number): number

//在当前函数重载无法实现
// function reloadadd(x: string|number,y: string|number): string|number{
//     if(typeof x === 'string' && typeof y === 'string'){
//         return x + y
//     }else if (typeof x === 'number' && typeof y === 'number'){
//         return x + y
//     }
// }

})()