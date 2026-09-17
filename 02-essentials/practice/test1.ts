// Basic types

// Number

let age : number = 29; // Used for integers and floating-point numbers.
let price = 99.30

// String

const userName : string = 'Naresh'

// Boolean

let isAdmin :boolean = true;

// Null and undefined as well but null can be used for type in some placess


// Advaced types 

let names:string[] = ['Naresh','Nani']
let productNames :Array<string> = ['mobile','mouse']

// with object typoes

let user : {
    name:string
    age:number
    phone:string
    address:string
} = {
    name:"naresh",
    age:20,
    phone:"xyz",
    address:"yx"
}

// typle 

let cordinates : [number,number] = [10,20] 

// literal types (custome values)

let roles : 'admin' | 'guest' | 'superPowerr' ='admin'


// optinoal chaining avoid the runtime errors , for accessing variable and calling methodes 


// object lo optinal properties ni create cheyadaniki 

// type Product = {
//     name:string,
//     safeGuard?:string
// }


type Roels = 'admin' | 'user';

type Address = {
    city:string;
    state:string;
    zipcode?:number
}

type User = {
    name:string;
    age:number;
    email:string;
    role:Roels;
    phone?:number
    address?:Address
}

const normalUser:User = {
    name:"Naresh",
    age:25,
    email:"naresh@gmail.com",
    role:'user',
    address:{
        city:"knl",
        state:"AP"
    }
}

console.log(normalUser.address?.zipcode ?? 'Not provided' )


// Statement 2

function udateUser(user:User,properties:Partial<User>) : User {

    return {
        ...user,
        ...properties
    }
}

udateUser(normalUser,{age:30})
// udateUser(normalUser,{salary:3000})


type Product = {
    id: number;
    name: string;
    price: number;
    status: 'available' | 'out-of-stock';
    discount?: number;
}

const product:Product = {
    id:1,
    name:"mobile",
    price:100.0,
    status:'available'
}
console.log(product.discount ?? 'No discount') // discount undifined  

// product.status = 'sold-out'


// statement 4

const apiUser : any = {
    name:"Naresh",
    age:25
}

console.log(apiUser.name,apiUser.age,apiUser.salary,apiUser.foo.bar)
