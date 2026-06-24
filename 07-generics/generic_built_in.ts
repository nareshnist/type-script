// 1. Array<T>

// Manam daily vadedi.

const names:string[] = ["Naresh","Ravi"];



const users:Array<string> = [];



// second examples 

// Promise 


async function getUser(){
    return {
        name:"Naresh",
        id:1
    }
}

async function userNames() {
    return ['Naresh','Nani'];
}


const productNames:Promise<string[]> = userNames();




// default generics 

 type Box<T = string> = {
    value:T
 }

 const box:Box = {
    value:'Naresh'
 }

 const box1:Box<number> = {
    value:1
 }