// string 
function getValues(value) {
    return value;
}
var userNmae = getValues('Naresh');
// const userAge = getValues(20) // error 
function getNumbers(value) {
    return value;
}
// Generic = Type ni later decide cheyadam.
// Manam function create chesetappudu type fix cheyakunda, function call chesetappudu type decide cheyadaniki Generic use chestam.
function getUser(user) {
    return user;
}
// const userName = getUser<string>('naresh');
// const age = getUser<number>(30);
// const isAdmin = getUser<boolean>(true);
var naresh = getUser('Naresh');
console.log(typeof naresh);
// internally
// function getUser(user:string):string;
getUser(10);
// function getUser(user:number):number;
getUser(10);
// function getUser(user:boolean):boolean;



