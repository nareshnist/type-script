
// Any accept the any type of value without type checking with disabled the type checking so should be avoided 


// Very rare cases should use any type as last option

// let age: any = 25;

// age = '37'
// age  = {};
// age = [];
// age= false;



// any type is used when we don't know the type of the value at compile time , and it get ridde of advanced type checking features of TypeScript

// Better Alternatives 


let age :  number | string | boolean  = 25; // Union Type either store number or string or boolean
age = true;