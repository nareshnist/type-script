// Generic Constraints

// 5__md ,6,,7 files 

function getProperty<T>(obj:T) {

    // return obj.name;

    // 1.name error 
    // true.name error 
}

const productName = getProperty({name:"Iphone"});
const productId = getProperty(1);
const isNewProduct = getProperty(true);


// Manam actually em kavali?

// Manaki name property unna objects matrame accept cheyyali.

function anotherFunction<T extends {name:string}>(obj:T) {
    return obj.name;
}


// T extends { name: string }
// "T edaina avvachu, kani name property compulsory undali."


anotherFunction({name:"Naresh"});
anotherFunction({city:"Naresh",address:"xyz",name:"Banglore"});
anotherFunction({name: 'Naresh',age: 30});

// anotherFunction({age:30});
// anotherFunction({phone:7660034328})



// Multiple Generics Enduku? 

function getEmpId<T , K extends keyof T>(obj:T,key:K) {
    return obj[key]
}


const employee = {
    name:"naresh",
    id:1
}

getEmpId(employee,'id')
// getEmpId({name:"",title:""},'id')