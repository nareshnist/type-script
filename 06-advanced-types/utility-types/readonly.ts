type User = {
    name:string;
    id:number;
}


const user:Readonly<User> = {
    name:"Naresh",
    id:10
}


console.log(user)