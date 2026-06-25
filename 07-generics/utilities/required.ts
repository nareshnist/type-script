
// Ippudu next utility type: Required<T>

// Idi Partial<T> ki opposite.

type User = {
    name:string;
    age:number;
}

const updateUser:Partial<User> = {
    name:"Nani"
}

const submitUser:Required<User> = {
    name:"Naresh Royal",
    age:28
}
// Required<User> type User = {name:string; age:number}