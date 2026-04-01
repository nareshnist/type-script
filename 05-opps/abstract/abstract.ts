
// abstruct  normal methods + abstract methode for child class


abstract class Animal {
    abstract makeSound() :void;

    move(){
        console.log('Animal is moving');
    }
}

class Dog extends Animal {
    makeSound(): void {
           console.log("Bark");
    }
}

let d1 = new Dog();
console.log(d1.makeSound())
d1.move()


//. practice 


abstract class Employee {

    abstract calculateSalary() : number;
        constructor(public name:string){
        }

    displayName(){
        console.log(`The Employee Name is ${this.name}`)
    }
}   

class Developer extends Employee {
    calculateSalary(): number {
        return 70000
    }

    constructor(name:string){
        super(name)
    }
}

const dev1 = new Developer('Naresh');
console.log(dev1.displayName())
console.log(dev1.calculateSalary());


class Manager extends Employee {

    calculateSalary(): number {
        return 100000;
    }

    constructor(name:string){
        super(name)
    }
}

const m1 = new Manager('Nilame');
console.log(m1.displayName())


// ✅ Problem 3: Payment System (Real Interview Type)

abstract class Payment {
    abstract pay(amount:number) : string
}

class UPI extends Payment {
    pay(amount: number): string {
        //  get upi details and pay 
        return 'paymnet is success'
    }
}

class CreditCard extends Payment {

   pay(amount: number): string {
       // get credit card details and pay ammount 

       return 'sucees'
   }
}


// 

abstract class APIService {
    abstract fetchData() : void;

}

class UserService extends APIService {

    fetchData(): void {
    }
}

    
class ProductService extends APIService {
  fetchData(): void {
    }
}