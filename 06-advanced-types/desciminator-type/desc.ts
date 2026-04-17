

type DBConnectonUrl = {
    path:string
    type:'db'
}

type FilePath  =  {
    filePath:string
    type:'file'
}


type Source = DBConnectonUrl | FilePath;

function handle(source:Source){


        if( source.type === 'db'){
            console.log(source.path)
        }else {
            console.log(source.filePath)
        }
    // adding samee filed in the object type is more predictable 
}