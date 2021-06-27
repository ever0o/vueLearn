/**
 * 接口是一种能力,一种约束而已
 * 
 * 
 */

(()=>{
    interface IPerson{
        firstName:string
        lastName:string
    }
    function showFullName(person:IPerson) {
        return person.firstName+"_"+person.lastName
    }
    const person ={
        firstName:'alex',
        lastName:'Tom'
    }
    console.log(showFullName(person))
})()