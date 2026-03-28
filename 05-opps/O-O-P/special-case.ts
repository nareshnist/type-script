// 1. Method Overloading (TypeScript way)


class Calculator {

    add(a:number,b:number) : number;
    add(a:string,b:string) :string

    add(a:any,b:any) :any {
        return a +b
    }
}

let c1 = new Calculator();
console.log(c1.add(10,20))
console.log(c1.add("10","40"))


// 2. Method Overriding