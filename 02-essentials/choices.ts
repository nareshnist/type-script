

// enum

enum Role {
    Admin,
    User ,
    Guest 
}


// literal types 
// varibale should only accept these 4 values when we define a type like this


let userRoles : 'Admin' | 'User' | 'Guest'  = 'Admin';




// custom type  or type alias

type Direction = 'North' | 'South' | 'East' | 'West';

type UserData = {
    name : string,
    direction : Direction 
}


function directions(direction:Direction){
    console.log("Direction is: " + direction);
}
