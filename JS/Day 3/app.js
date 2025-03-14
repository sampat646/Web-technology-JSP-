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
let sum = (a,b,c)=>{
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

// console.log(calculate(10,20,sum,sub,mul,div));

// TODO Hoisting Variable hoisting (var)
// console.log(x);//undefined
// var x= 3;
// console.log(x);//3

// var x;
// console.log(x);//undefined
// x= 3
// console.log(x);//3

// TODO Function Declaration hoisting

// sayWish()//Happy holi
// function sayWish() {
//     console.log("Happy holi");
    
// }


//TODO function expression vs Declaration
// sayHi()//TypeError: sayHi is not a function
// var sayHi = function(){
//     console.log("Hi!!!!!!!!");
    
// }

// var sayHi;
// sayHi()TypeError: sayHi is not a function
// sayHi = ()=>{
//     console.log("Hii");
    
// }

// function processUser(userId) {
//     if (!userId) {
//         var result = "No user provided"; // Hoisted to top of function
//     }
//     console.log(result); // Output: "No user provided" or undefined
//     var result = "User ID: " + userId; // Overwrites result
//     return result;
// }

// console.log(processUser(null)); // Output: "User ID: null"


// {
//     console.log(x);
//     var x =1;
    
// }
// console.log(x);//1

// {
//     console.log(y);
//     let y = 3
    
// }


// console.log(y);//ReferenceError: Cannot access 'y' before initialization







