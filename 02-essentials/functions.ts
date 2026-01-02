


// Typescript automatically infers the type of b as number because it is assigned a numeric default value.
// when function retured the type is also inferred as number
// manually we don't need to specify the types here but we can do it for better code readability

function addNumbers(a:number,b =9 ) {
    return a + b;
}


// no return statement function has void return type

function greet(name:string = "Guest")  {
    console.log("Hello, " + name);
}


// Function as type


//  function as type
function performJob(cb: (a: number) => void) {

}


const logmessage = (num: number): void => {
    console.log(num)
}

performJob(logmessage);

type User = {
    name: string;
    age: number;
    greet: (greeting: string) => void;
}

let user:User = {
    name: "John",
    age: 30,
    greet: (greeting: string) => {
        console.log(greeting + ", " + user.name);
    }
}

user.greet("Hello");