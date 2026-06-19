


type Users = {
    [key:string] : string;
}



// api response lo subject vastunai 


type Subjects = {
    [type:string] : number
}

const personSubjects:Subjects =  {
    english:30,
    maths:70,
    physics:44
}

personSubjects.social = 33;

console.log(personSubjects)


// form data

type FormData = {
    [key:string] : string;
}


let name = 'naresh' as const

console.log(name)