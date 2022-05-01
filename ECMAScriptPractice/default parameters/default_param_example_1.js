// function multiply(value1, value2){
//     if(value2 === void 0){
//         value2 = 1;
//     }
//     return value1 * value2;
// }
// console.log(multiply(4))

function multiply(value1, value2=1){
    return value1 * value2;
}
console.log(multiply(4))