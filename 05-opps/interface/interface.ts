
interface User {
    name:string;
    age:number;
    employee?:string
}

let user:User = {
    name:'naresh',
    age:28,
}

// ✅ 3. Interface inheritance (EXTENDS concept)

interface IUser1 {
    name:string
}

interface IUser2 {
    age:number;
}

interface IUser3 {
    fullname:string;
}

interface IUser4 extends IUser1, IUser2 , IUser3 {
}

let user1:IUser4 = {
    name:"naresh",
    age:27,
    fullname:"Naresh royal"
}


// IMPLEMENTS

class Person implements User {
    constructor(public name:string,public age:number){}
}


// declaring methodes in interfaces 

interface Person {
    name:string;
    greet() : string
}

interface Person1 {
    name:string;
    greet :() => string
}

// defining readonly properties in the interface 

interface Person3 {
    readonly id :number
}

let p3:Person3 = {
    id:123
}
// p3.id = '12' // Error can't update as it is readonly 