


abstract class Product {
  constructor(public id:number,public name:string,public price:number){
    }
}

// implements → structure matrame enforce chestundi (propertise must prresented in class)
class PhysicalProduct extends Product  {
    
    constructor(id:number,name:string,price:number,public weight:number){
        super(id,name,price)
    }

}

// implements → structure matrame enforce chestundi (propertise must prresented in class)
class DigitalProduct extends Product {
    constructor(id:number,name:string,price:number,public fileSize:number,public downloadUrl:string){
        super(id,name,price)
    }
}


abstract class Payment {
    abstract pay(amount:number) : string;
}


class CreditCard extends Payment {
    pay(amount: number): string {
        return 'payment success'
    }
    validateCard(){
        // get all card detais and verify 
        
        // once we verify detais
        this.pay(10000)
    }
}

class UPI extends Payment {
    pay(amount: number): string {
        return 'paymenyt success '
    }

    validateUPI(){
        // get all upi detais and verify 
        
        // once we verify detais

         this.pay(100)
    }
}


// abstract class Payment {
//   constructor(public amount: number) {}

//   abstract pay(): string;
// }

// class CreditCard extends Payment {
//   validateCard(): boolean {
//     return true; // assume validation success
//   }

//   pay(): string {
//     if (this.validateCard()) {
//       return `Paid ${this.amount} using Credit Card`;
//     }
//     return "Card validation failed";
//   }
// }

// class UPI extends Payment {
//   validateUPI(): boolean {
//     return true;
//   }

//   pay(): string {
//     if (this.validateUPI()) {
//       return `Paid ${this.amount} using UPI`;
//     }
//     return "UPI validation failed";
//   }
// }


abstract class APIservice {

  constructor(public url:string){}
  abstract  fetchData () : void

log():void {
    console.log("called ")
}
  
}

class UserService extends APIservice {

    // edi methode over riding
    fetchData(): Promise<any> {
        return Promise.resolve('response')
    }
}

class ProductService extends APIservice {

      // edi methode over riding
    // edi methode over riding
    fetchData(): Promise<any> {
        return Promise.resolve('response')
    }
}

// Interface
// interface IDataService {
//   fetchData(): Promise<any>;
// }

// // Abstract class
// abstract class APIservice implements IDataService {
//   constructor(public url: string) {}

//   abstract fetchData(): Promise<any>;

//   log(): void {
//     console.log("called");
//   }
// }

// // User Service
// class UserService extends APIservice {
//   constructor(url: string) {
//     super(url);
//   }

//   fetchData(): Promise<any> {
//     this.log();
//     return Promise.resolve(`User data from ${this.url}`);
//   }
// }

// // Product Service
// class ProductService extends APIservice {
//   constructor(url: string) {
//     super(url);
//   }

//   fetchData(): Promise<any> {
//     this.log();
//     return Promise.resolve(`Product data from ${this.url}`);
//   }
// }