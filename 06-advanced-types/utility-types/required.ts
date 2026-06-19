type User = {
    name?:string;
    id?:string;
}

type requiredUser = Required<User>;


const user:requiredUser = {
    name:"Naresh",
    id:'10'
}