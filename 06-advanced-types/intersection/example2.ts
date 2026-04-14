
type User = {
    name:string;
    email:string;
}


type isAdmin = User & {
    role:string
}



interface A {
    a:string
}
interface B {
    b:number;
}

type C = A & B;

let user2:C = {
    a:'1',
    b:2
}