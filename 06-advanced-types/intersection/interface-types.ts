
interface A {
    name:string
}

interface A {
    age :number
}


// auto merging 
let a:A = {
    name:"age",
    age:1
}


// Duplicate identifier 'B'.ts(2300) Error

// type B = {
//     name:string
// }

// type B = {
//     age:number
// }
