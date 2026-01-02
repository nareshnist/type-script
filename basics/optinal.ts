// optinal parameters in the function 

function generateError(msg?:string){
    throw new Error(msg)
}

generateError();

// options properties  in the object 

type Developer = {
    name:string;
    role?:'Developer' | 'Arch'
}



// nullish coalescing


// if undefined or null use the valuu variable_xx ?? (value) if not take variable_xx value ex 