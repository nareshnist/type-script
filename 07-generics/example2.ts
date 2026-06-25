
type UserPreview<T> = {
    value:T;
}


const userPreview:UserPreview<string> = {
    value:"Naresh"
}

const preview:UserPreview<User> = {
    value:{
        id:1,
        name:"Naresh",
        email:"exy@gmail.com"
    }
}

// examples 2

function getName<T extends{name:string}>(object:T){
    return object.name;
}

getName({name:"Naresh"});
// getName({age:"12"})// invalid

// examole 3


function getProperty<T, K extends keyof T>(object:T,key:K){
    return object[key]
}

getProperty({name:"Naresh"},"name");
// getProperty({name:"naresh"},"age"); // invalid


