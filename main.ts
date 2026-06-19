
const STATUS = {
    OPEN:'OPEN',
    CLOSED:'CLOSED',
    PENDING:'PENDING'
} 

// type script internally understood  

type status = {
    OPEN:string;
    CLOSED:string;
    PENDING:string;
}


// kani manam as const use chesina ventane adi widening ni stope chestundi ante 
// values ni string marchakunda preserv chestundi 

// default behaviour stop chesi , manam rasidanini consider chestundi 
// yenduku ante as const readonly object ga marustundi , eppudu readonly ante can't modidy 
// ,so Apudu value emi undo daniki type ga consider chestundi
// ante defualt consideration (widening ni stop chestundi)

let STATUS1 = {
    OPEN:'OPEN',
    CLOSED:'CLOSED',
    PENDING:'PENDING'
} as const;

// STATUS1.naresh =''; // adding new property x
// STATUS1['OPEN'] = 'Nnani' //  Updating existing property values  x
// delete STATUS1['CLOSED']  // Can't delete it
// STATUS1 = {
//     NARESH:'NARESH'
// }


// Step 1: typeof STATUS

type StatusObj = typeof STATUS1;

// typeof STATUS1; ELE STATUS1 VARIABLE NUNCHI TYPE NI CREATE CHESUKUNTUNID INTERNALL GA TYPESCRIPT 
type StutusType = {
    readonly OPEN:'OPEN';
    readonly CLOSED:'CLOSED';
    readonly PENDING:'PENDING';
}

// Step 2: keyof typeof STATUS

type StatusKeys = keyof typeof STATUS; 

// Step 3: Object Access Type

// Normal JS lo: STATUS['OPEN']
// Result: 'OPEN'
// Vasthundi kada.
// TypeScript lo type level lo kuda same syntax untundi.

type openStutus = typeof STATUS1['OPEN'];

// another examples 

const SORT_DIRECTION = {
    ASC:'asc',
    DESC:'desc'
} as const


// getting key 

type SortKeys = keyof typeof SORT_DIRECTION;

// getting values 

type SORTDIRECTION = typeof SORT_DIRECTION[keyof typeof SORT_DIRECTION]