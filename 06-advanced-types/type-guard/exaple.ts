



// primitive types type guarding 

function printLength(value : string | number) {
    // console.log(value.length) re wrrite this line 

    if(typeof value === 'string'){
        console.log(value.length)
        return
    }

    console.log(value)
}


printLength('naresh')
printLength(1)