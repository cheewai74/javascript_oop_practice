// Assigning functions to expressions
// Anonymous functions 
// Can initialize values immediately
// Useful when needed once.

// var plus = function(a,b){
//     return console.log(a+b);
// };
// plus(2,2)

// Execute the function immediately
var plus = function(a,b){
    return console.log(a+b);
}(2,2);