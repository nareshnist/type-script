

type User = {
    id:number;
    name:string;
    email:string;
}


// epudu manam kotha user object create cheyali kani andulo only selected fildes matram undali based on manakada una object 

// example {name:string; email:string}


// const newUser:Pick<User, keyof User> = {
  
// }

type UserProfile = Pick<User,'email' | 'name'> 

// internally Userprofile = {email:string; name:string;}


// another Exmaples

type AnotherUser = {
    id:number;
    name:string;
    email:string;
    age:number
}

type UserContact = Pick<AnotherUser ,'name' | 'email'>

type UserId = Pick<AnotherUser,'id'>

type UserDetails = Pick<AnotherUser,'name' | 'age'>
// {name:string; age:number}

const user:Pick<User ,'email'> = {
    email:"xys@gga"
}


// Real Project examples

type SecurityBulletin = {
    uuid:string;
    title:string;
    description:string;
    publishedDate:string;
}

type BulletinTableRow = Pick<SecurityBulletin ,'title' | 'uuid'>