

type User  = {
    name:string
}


// function printName(data:unknown){
//     console.log(data.name)// 👉 unknown lo .name use cheyyalem
// }



// Custom Type Guard
function isUser(obj:any) : obj is User {
    return obj && typeof obj.name === 'string'
}



function printName(data:unknown) {
    if(isUser(data)) {
        console.log(data.name)
    }
}