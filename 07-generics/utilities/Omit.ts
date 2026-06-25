type User = {
    id:number;
    name:string;
    email:string;
    password:string;
}

type UserContactDetails = Omit<User,'password'>

const userData:Omit<User,'password'> = {
    id: 1,
    email: "xyz",
    name: ""
}

// pick create only manaki kavalsina , omit specify chesina fields ni allow cheyadu or create cheyadi object lo