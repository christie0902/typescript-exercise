let sales: number = 123_456_789;
let course: string = "TS";
let is_published = true;


// enum Size {Small=1, Medium, Large};
const enum Size {Small=1, Medium, Large};

let mySize: Size = Size.Medium;

// function calculateTax (income:number, year?:number) : number {
function calculateTax (income:number, year=2022) : number {
    if (year>2022)
        return income*1.2
    return income*1.3
}

calculateTax(20000);

let employee: Employee  = {id:1, name:'',
retire: (date: Date) => {console.log(date)}
};

employee.name = "A"

type Employee = {
    readonly id:number,
    // name?:string
    name:string,
    retire: (date: Date) => void
}

function kgToLbs(weight: number | string) : number {
 //Narrowing
 if (typeof weight === 'number') {
    //see all methods for numbers
    return weight*2.2
 } else {
    //see all string methods
    return parseInt(weight) * 2.2
 }
}

kgToLbs(10);
kgToLbs('10kg');

// intersection types
type Draggable = {
    drag: ()=>void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: ()=> {},
    resize: ()=>{}
}

//literal type - can only be 50 or 100
type Quantity = 50 | 100; 

let quantity: Quantity = 100;

type Measure = "cm" | "inch";
//Nullable type
function greet (name:string | null  |undefined) {
    if (name)
     console.log(name.toUpperCase());
    else
    console.log('Hola!');
    
}

greet(null);
