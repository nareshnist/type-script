
// Taks 1


// type User = {
//     name:string
//     age:string
//     email:string
// }

// const anotherUser:User  = {
//     name:"naresh",
//     age:"23",
//     email:"naresh@gmail.com"
// }

// console.log(anotherUser.salary)



// Task 2

// type User = {
//     name: string;
//     age: number;
//     address?: {
//         city: string;
//     };
// }

// const user: User = {
//     name: "Naresh",
//     age: 25
// };

// console.log(user.address?.city ?? 'Unknown city')


// Taks 3 

type User  = {
    name:string
    age:number
    nickname:string  | null
    phone:string | undefined
}

const user: User = {
    name: "Naresh",
    age: 25,
    nickname: null,
    phone: undefined
}

console.log(user.nickname ?? 'No nickname')
console.log(user.phone ?? 'No phone')
// user.nickname = undefined
// user.phone = null