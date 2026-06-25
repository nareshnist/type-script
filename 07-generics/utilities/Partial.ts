

type User =  {
    id:number;
    name:string;
    email:string;
}

const createUser:User = {
    id:1,
    name:"nARESH",
    email:"XYZ@gamial.com"
}


// manam inko type create cheyakuda ,una type nunchi inko user object create chesam , dantlo anni propertis optional
// so 
const user:Partial<User> ={
    name:"naresh yoyal"
}

const updateUserEmail:Partial<User> ={
    email:"xyz@gmail.com"
}


// real time lo 


function updateUser(id:number,payload:Partial<User>){
    // api call 
}

updateUser(1, {
    name: "Updated Name"
});


updateUser(1, {
    email: "xyz@gmail.com"
});

updateUser(1, {
    email: "xyz@gmail.com"
})