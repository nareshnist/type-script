
type Person = {
    name:string;
}

type Employee = {
    empId:string;
}

type PersonEmployee = Person & Employee;

let user:PersonEmployee = {
    name:'Naresh',
    empId:'133'
}

console.log(user)