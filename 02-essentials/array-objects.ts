
// Array types

let hobbies:string[]  = ["Sports", "Cooking" ];;

hobbies.push("Reading");
// hobbies.push(1)

// let users:string[] //explicit type declaration
// let users:(string | number)[]; //explicit type declaration
let users: Array<string | number>; // another way of declaring array types (feature of genqerics).


users = ["Max", 1, "Anna"];
users.push(2);
users = ["Naresh","Nani"];


// Typle type


// Advancly you know the number of elements in an array and their types.
// In that case, you can use tuple types.
let possibleResults: [number, number];
possibleResults = [1, 2];
// possibleResults = [1, 2, 3]; // Error: Source has 3 element(s) but target allows only 2.


// Object types

let person : {
    name: string;
    age: number | string;
    hobbies: string[];
    role:{
        description: string;
        id: number;
    }
} = {
    name: "Naresh",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role:{
        description: "Admin",
        id: 1
    }
}

// two rules should aware

let val :{}  = 'Some Text'  // any value other than null and undefined is assignable to {}

// val = undefined; // Error: Type 'undefined' is not assignable to type '{}'.
// val = null; // Error: Type 'null' is not assignable to type '{}'.
val = 10;
val = true;
val = [];
val = {};


//. Record type


// variable should be an object , i don't know the properties names and values types in advance


let data:Record<string, number | string>;


data = {
    entry1: "Some Text",
    entry2: 100, 
}
