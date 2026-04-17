

type FileData = {
    path:string;
    content:string;
}

type Status = {
    isOpen:boolean;
    errorMessage?:string;
}

type AccessedDileData = FileData & Status;

type TypeA = { 
    name:string
};
type TypeB = {
    age:number
};

type NewType = TypeA & TypeB;