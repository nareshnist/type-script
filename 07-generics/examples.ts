function echo<T>(value:T) :T{
    return value
}

// T type place holder , will replace later with actual type when fucnation calling


const userName = echo<string>('Naresh');
const userAge = echo<number>(20);
const isAdmin = echo(true) // isAdmin:true ga undi nenu explicat ga type mention cheyakapothe 




// examples 2

type Wrapper<T> = {
    value:T
}

const data:Wrapper<string> = {
    value:"Naresh"
}



// example 3

function getId<T extends {id :number;}>(value:T) {
    return value.id;
}


getId({id:3});
getId(3)


// example 4 

function getValue<T, K extends keyof T>(object:T,key:K){
    return object[key]
}

const user = {
    name:"Naresh",
    age:30
}
getValue(user,'name')
getValue(user,'address')


// examples 5

type ApiResponse <T= string> = {
    data:T
}




// chanlleng 2 

