// * anonymous function 
//! NOTE: must be in parentheses

(function(){
    console.log("this is anonymous function")
})

// * Use case 
// * 1. As function expression
const fn_ex = function(){
    console.log("this is anonymous function assign to a variable, function expression")
}
// * call it:
fn_ex()

// * 2. As a callback function (function passed as argument to another function)

setTimeout(function(){console.log("this is the first message")}, 5000);
setTimeout(function(){console.log("this is the second message")}, 3000);
setTimeout(function(){console.log("this is the third message")}, 1000);

// * 3. IIFE (Immediatlely invoked function execution)

 (function () {
    console.log('Immediately invoked function execution');
})();