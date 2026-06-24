

// string 

// function getValues(value:string):string{
//     return value
// }

// const userNmae = getValues('Naresh');
// const userAge = getValues(20) // error 

// function getNumbers(value:number):number{
//     return value
// }


// Generic = Type ni later decide cheyadam.


// Manam function create chesetappudu type fix cheyakunda, function call chesetappudu type decide cheyadaniki Generic use chestam.


// function getUser<T>(user:T) : T {
//     return user
// }

// const userName = getUser<string>('naresh');
// const age = getUser<number>(30);
// const isAdmin = getUser<boolean>(true);

// const naresh = getUser('Naresh');
// console.log(typeof naresh)

// internally
// function getUser(user:string):string;


getUser(10)
// function getUser(user:number):number;


getUser(10)
// function getUser(user:boolean):boolean;


// Real time generic examples 

// re usability kosam use chestam 

const employees = [
    {
        id:1,
        name:"Naresh"
    },
    {
        id:2,
        name:"Naresh"
    }
]


function getEmployes(empployee:{id:number,name:string}[]) {
    return employees[0]
}

// Problem:

// Employee kosame panichestundi.
// Products kosam malli function rayali.
// Users kosam malli function rayali.


// function getFirstItem<T>(items:T[]):T{
//     return items[0];


// const employee = getFirstItem(employees);}

// const products = [
//     {
//         id:1,
//         name:"Phone"
//     },
//     {
//         id:2,
//         name:"Iphone"
//     }
// ]

// const product = getFirstItem(products);



// examples 2 

// Suppose API response:
const apiResponse = {
    data:{
        id:1,
        name:"xyz"
    }
};

// Inkoka API:

const anotherApiResponse = {
  data: {
    id: 101,
    title: 'Nuxt Course'
  }
};

// Response structure same.

// Data matram maruthundi.


type ApiResponse<T> = {
    data:T
}

type User = {
    id:number;
    name:string;
}

type Product = {
  id: number;
  title: string;
}

const  userData:ApiResponse<User> = {
    data: {
        id: 0,
        name: ""
    }
}

const productData:ApiResponse<Product> = {
    data:{
        id: 0,
        title: ""
    }
}





// 


function getFirstRecord<T>(items:T[]) :T {
    return items[0]
}


// internally getFirstRecord<string>(items:string[]) : string
const user = getFirstRecord(['Naresh','Nani']);

// internally getFirstRecord<number>(items:number[]) : number
const getUserId = getFirstRecord([1,2,3,4,5,6]);

const boolearb  = getFirstRecord([true,false]);



// real time examples 

const bulletinsData = [
    {
        uuid:'xyss',
        title:"string"
    },
    {
        uuid:'xyss',
        title:"string"
    },
]

const bulletinsRecord = getFirstRecord(bulletinsData);



