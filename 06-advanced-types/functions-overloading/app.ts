


function add(a:string,b:string):string;
function add(a:number,b:number) :number;
function add(a:any, b:any){
    return a+b;
}

const result = add(10,30);
const result1 = add('str1','str2');


console.log(add(1,2))