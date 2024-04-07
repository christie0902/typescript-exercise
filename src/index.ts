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

let employee: {
    readonly id:number,
    // name?:string
    name:string,
    retire: (date: Date) => void
} = {id:1, name:'',
retire: (date: Date) => {console.log(date)}
};

employee.name = "A"