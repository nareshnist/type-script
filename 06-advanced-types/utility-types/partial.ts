

// 👉 Partial<T> ante object lo unna anni properties ni optional ga marchadam


type User = {
    name:string;
    id:number;
    email:string;
}


type PartialUser = Partial<User>;

const user:PartialUser = {
    name:"Naresh",
}

console.log(user);