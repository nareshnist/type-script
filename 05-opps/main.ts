
// Class in typesScript 

class Person {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }


    sayHello(){
        console.log(`Hi i am ${this.name}`)
    }
}

const p1 = new Person("Naresh",24);
p1.sayHello();


// Access modifies 

class User {
    public name:string;

    constructor(name:string){
        this.name = name;
    }
}

const u1 = new User('Naresh');
console.log(u1.name);

// Privete access modifier

class User1 {
  private password: string;

    constructor(psd:string){
    this.password = psd;
    }
}

const u2 = new User('12345');
console.log((u2 as any).password)


// Protected 

class Parent {
    protected secret ='hidden'
}

class Child extends Parent {

    show(){
        console.log(this.secret)
    }
}

const c1 = new Child();
console.log(c1.show())

// readonly properties 

class Product {
    readonly id:number;
   readonly user:{name:string};

    constructor(id:number,user:{name:string}){
        this.id = id;
        this.user = user;
    }
}

const p2 = new Product(121,{name:"naresh"});
console.log(p2.id)
p2.user.name = 'Nani';
console.log(p2.user.name);
// p2.id = 122;


// 5. Constructor shortcut (VERY useful)

class User2 {
    public name:string;
    constructor(name:string){
        this.name = name;
    }
}

class User3 {
    constructor(public name:string){}
}

const u3 = new User3("Naresh nani");
console.log(u3.name);


// 6. Methods in class

class Calculator {
    public count = 0;

    increment() {
        this.count++;
    }
}

const c = new Calculator();
const fn = c.increment;
fn()
