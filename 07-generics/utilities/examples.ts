type User = {
    id:number;
    name:string;
    email:string;
    password:string;
}


type Userlogin = Pick<User,'email' | 'password'>;
// INTERNALLY type Userlogin{email:string;password:srting}

type UserUpdate = Partial<User>;
const user:UserUpdate = {
    name:"naresh"
}

const anotherUser :UserUpdate = {
    email:"naresh@gmail.com"
}

// correct beacuse partial make all propertis optins so we can use whatever we needed


type UserResponse = Omit<User,'password'>
// INTERNALLY type UserResponse{email:string;name:srting;id:number}