/* Named functions */
function NamedFunction() {
    return"Named functions";
}
/*Anonymous function*/
//A function doesn't having name is known as af.

let Expression = function (a,b){
    return a*b;
}

/*Arrow functions*/

// console.log(sum(2,4));

/* Single parameter  arrow function */
let greet = fname =>{
    return "Good morning "+fname
}
console.log(greet("sam"));


/*
call a function: a function calling as parameter to another function
*/
let sum = (a,b)=>{
    return a+b;
}
let sub = (a,b)=>{
    return a-b;
}
let mul = (a,b)=>{
    return a*b;
}
let div = (a,b)=>{
    return a/b;
}
function calculate(a,b,sum,sub,mul,div){
    console.log(sum(a,b));
    console.log(sub(a,b));
    console.log(mul(a,b));
    console.log(div(a,b));
    
    
    
    
}

console.log(calculate(10,20,sum,sub,mul,div));

