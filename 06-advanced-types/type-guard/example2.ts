


// with instanceof
class User {
    name = 'Naresh'
}


class Admin {
    role = 'admin'
}


function checkRole (person: User | Admin) {
    // console.log(person.role) direct ga error vastundi ,if user passed

    if(person instanceof Admin){
        console.log(person.role) // role
    }else {
        console.log(person.name) // 
    }
}

let user: User = {
    name:"Naresh"
}

checkRole(user);


// in operator  interfaces , types (edi custom object types ki use cheyachu)


interface Dog {
    bark:() =>  void
}

interface Cat {
    meow : () => void
}

function makeSound(animal : Dog | Cat) {

    if('bark' in animal){
        animal.bark()
    }else {
        animal.meow()
    }

}

let dog:Dog  = {
    bark : () =>{
        console.log("barkerd")
    }
}

makeSound(dog);



// real time examples


type Success = {data:string}
type ApiError = {error:string}

type ApiResponse = Success | ApiError


function handleResponse(res :ApiResponse ){

    if('data' in res) {
            console.log(res.data)
            return
    }
    console.log(res.error)
}

let success:Success = {
    data :'There is a data available in the db'
}


handleResponse(success)