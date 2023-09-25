function hi(){
    console.log('I am a function');
}

hi();

function calculateTotal(price:number, quantity:number): number{
    return price * quantity;
}

console.log(calculateTotal(2,3));

function greet(name:string, greetMessage?:string){
    if(greetMessage){
        return `Hi ${name}, ${greetMessage}`
    }
    else{
        return `Hi ${name}`
    }
}

console.log(greet('Vignesh','Good Morning'));
console.log(greet('Vignesh'));

function add(a:number, b:number=0){
    console.log(a + b);
}

add(1,2);
add(1);

// Arrow Function
const multiply = (a:number, b:number):number => a*b;
console.log(multiply)

let e = 5;
let f = 5;
type MatchOperation = (a:number, b:number) => number; 
const addNew:MatchOperation = (e,f) => e+f;