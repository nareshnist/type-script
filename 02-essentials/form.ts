

// ! says that elements must presented , like it is an not null element.

const inputEl = document.getElementById('user-name') as HTMLInputElement;

// if(!inputEl){
//     throw new Error("Could not find user-name element");
// }


console.log(inputEl?.value)


// ? if valye is there perform an action ,if not will acccess the value

// ! says that valus is not null

// "as" type casting (type converting to specific) explict type assigmenent.