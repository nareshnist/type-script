// type assignments in TypeScript

let userName: string; // number , boolean  explicit type assignment or type annotation
let userAge = 25; // type inference automatically infers the type as number

userName = 'Naresh';
// userName = 30; // Error: Type 'number' is not assignable to type 'string'


// where else type assignments are needed example  functionss

function add(a: number, b = 8){
    return a + b;
}


add(10);
// add("22")   
add(10,11)



// when declare varibalees without initialization explicit type assignment is needed
let isLoggedIn: boolean;
isLoggedIn = true;

// when you initialize a variable, TypeScript infers the type automatically so explicit type assignment is not needed.
