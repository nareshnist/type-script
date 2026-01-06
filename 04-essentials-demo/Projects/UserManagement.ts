

enum Role {
    Admin,
    User,
    Guest
}

// 1️⃣ Define Types (VERY IMPORTANT)

// Create types for the following:


type User = {
    id:number;
    name:string;
    email?:string;
    role:Role;
    isActive:boolean;
}


// 2️⃣ API Status (Literal Type)

// Create a type for API status with values:
type apiResonse = "idle" | "loading" | "error" | "success";

const userinfo:User = {
    id:1,
    name:"Naresh Royal",
    email:"nareshjupalle767@gmail.com",
    role:Role.Admin,
    isActive:true
}

const apiresponses:apiResonse = 'success';


// 3️⃣ Users Data
// Create an array called users with at least 3 users:
// One Admin
// One User
// One Guest
// At least one user without email

const users:User[] = [
    {
        id:1,
        name:"Naresh",
        email:"nareshjupalle767@gmail.com",
        role:Role.Admin,
        isActive:false
    },
    {
        id:2,
        name:"Nani",
        role:Role.User,
        isActive:true
    },
    {
        id:3,
        name:"Royal",
        email:"nareshjupalle8800@gmail.com",
        role:Role.Guest,
        isActive:true
    }
]

// 4️⃣ Functions to Implement
// ✅ getActiveUsers
// Returns only active users
// Proper return type required

function getActiveUsers(users:User[]) : User[] {
    let filterUsers = users.filter(user => user.isActive)
    return filterUsers;
}

getActiveUsers(users);

// ✅ getUserEmail
// Accepts userId
// Returns user email or "Email not available"
// Must use optional chaining
// Must NOT use any

function getUserEmail(userid:number) : string {
    return users.filter(user => user.id === userid)[0]?.email || 'Email not available'
}


getUserEmail(1);
getUserEmail(2);


// ✅ updateUserStatus
// Accepts userId
// Toggles isActive
// If user not found → return "User not found"


function updateUserStatus(userId:number) : string {
    const user = users.find(user => user.id === userId)

    if(!user) return 'User not found';

    user.isActive = !user.isActive;
    return 'User status is updated '
 }

 updateUserStatus(1);
 updateUserStatus(10)