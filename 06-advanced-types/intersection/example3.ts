

type TApiData = {
    users:string[]
}

type Meta = {
    requestId:string;
    timestamp:number
}

type ApiResponse = TApiData & Meta;


type ButtonProps = {
    label:string
    type:string
    onClick:() => void
}

type StyleProps = {
    color:string;
    size:string
}

type ButtonPropsReceiver = ButtonProps & StyleProps;


// cases 

type User = {
    name:string;
    email:string;
}


type Admin = {
    role:"admin",
    permisiion:[""]
}

type AdminUser = User & Admin;