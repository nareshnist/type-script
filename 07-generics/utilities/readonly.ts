// Suppose API nundi user data vachindi.

type User = {
    id:number;
    name:string;
}

const user : User = {
    id:1,
    name:'Naresh'
}

// Evaro team member porapatuna:
user.id = 100;
// or 

user.name = "Ravi";

// Kani mana requirement:
// API nundi vachina data ni mutate cheyyakudadhu.


const anotherUser:Readonly<User> = {
    id:1,
    name:"nani"
}
// anotherUser.id = 2


